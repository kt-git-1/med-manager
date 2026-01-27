import { adherenceCreateSchema, queryAdherenceSchema } from "@med/validation";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { listAdherenceLogs } from "@/lib/adherence";
import { applyInventoryDecrement, shouldDecrementInventory } from "@/lib/inventory";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  return withRequestLogging(request, "GET /patients/:patientId/adherence", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const { patientId } = await context.params;
    const patient = await prisma.patient.findFirst({
      where: { id: patientId, caregiverId },
      select: { id: true },
    });
    if (!patient) {
      return notFound("Patient not found");
    }

    const url = new URL(request.url);
    const query = queryAdherenceSchema.safeParse({
      from: url.searchParams.get("from") ?? undefined,
      to: url.searchParams.get("to") ?? undefined,
      cursor: url.searchParams.get("cursor") ?? undefined,
      limit: url.searchParams.get("limit") ? Number(url.searchParams.get("limit")) : undefined,
    });
    if (!query.success) {
      return invalidInput("Invalid query");
    }

    const result = await listAdherenceLogs(prisma, {
      patientId,
      from: query.data.from,
      to: query.data.to,
      cursor: query.data.cursor,
      limit: query.data.limit,
    });
    return Response.json(result, { status: 200 });
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  return withRequestLogging(request, "POST /patients/:patientId/adherence", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const { patientId } = await context.params;
    const patient = await prisma.patient.findFirst({
      where: { id: patientId, caregiverId },
      select: { id: true },
    });
    if (!patient) {
      return notFound("Patient not found");
    }

    const body = adherenceCreateSchema.safeParse(await request.json());
    if (!body.success) {
      return invalidInput("Invalid request body", { issues: body.error.issues });
    }

    const existing = await prisma.adherenceLog.findFirst({
      where: { patientId, clientUuid: body.data.clientUuid },
    });
    if (existing) {
      return Response.json(existing, { status: 200 });
    }

    const doseInstance = await prisma.doseInstance.findFirst({
      where: { id: body.data.doseInstanceId, patientId },
      select: { id: true, medicationId: true, status: true },
    });
    if (!doseInstance) {
      return invalidInput("Dose instance not found");
    }

    const result = await prisma.$transaction(async (tx) => {
      const adherence = await tx.adherenceLog.create({
        data: {
          doseInstanceId: doseInstance.id,
          patientId,
          action: body.data.action,
          takenAt: new Date(body.data.takenAt),
          source: "family",
          clientUuid: body.data.clientUuid,
        },
      });

      await tx.doseInstance.update({
        where: { id: doseInstance.id },
        data: { status: body.data.action === "taken" ? "taken" : "skipped" },
      });

      if (shouldDecrementInventory(body.data.action, doseInstance.status)) {
        await applyInventoryDecrement(tx, doseInstance.medicationId);
      }

      return adherence;
    });

    return Response.json(result, { status: 201 });
  });
}

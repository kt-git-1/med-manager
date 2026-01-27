import { adherenceCreateSchema, queryAdherenceSchema } from "@med/validation";
import { parsePatientAuthToken } from "@/lib/auth";
import { invalidInput, unauthorized } from "@/lib/errors";
import { hashPatientToken } from "@/lib/patientTokens";
import { prisma } from "@/lib/prisma";
import { applyInventoryDecrement } from "@/lib/inventory";
import { listAdherenceLogs } from "@/lib/adherence";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

async function resolvePatientId(headers: Headers): Promise<string | null> {
  try {
    const token = parsePatientAuthToken(headers);
    const secret = process.env.PATIENT_TOKEN_SECRET;
    if (!secret) return null;

    const tokenHash = hashPatientToken(secret, token);
    const session = await prisma.patientSession.findFirst({
      where: {
        tokenHash,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
      select: { patientId: true },
    });
    return session?.patientId ?? null;
  } catch {
    return null;
  }
}

export async function GET(request: Request): Promise<Response> {
  return withRequestLogging(request, "GET /me/adherence", async () => {
    const patientId = await resolvePatientId(request.headers);
    if (!patientId) {
      return unauthorized("Invalid patient session");
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

export async function POST(request: Request): Promise<Response> {
  return withRequestLogging(request, "POST /me/adherence", async () => {
    const patientId = await resolvePatientId(request.headers);
    if (!patientId) {
      return unauthorized("Invalid patient session");
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
          source: "patient",
          clientUuid: body.data.clientUuid,
        },
      });

      await tx.doseInstance.update({
        where: { id: doseInstance.id },
        data: { status: body.data.action === "taken" ? "taken" : "skipped" },
      });

      if (body.data.action === "taken" && doseInstance.status !== "taken") {
        await applyInventoryDecrement(tx, doseInstance.medicationId);
      }

      return adherence;
    });

    return Response.json(result, { status: 201 });
  });
}

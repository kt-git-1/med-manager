import { adherenceCreateSchema, queryAdherenceSchema } from "@med/validation";
import { parsePatientAuthToken } from "../../../lib/auth";
import { invalidInput, unauthorized } from "../../../lib/errors";
import { hashPatientToken } from "../../../lib/patientTokens";
import { prisma } from "../../../lib/prisma";
import { applyInventoryDecrement } from "../../../lib/inventory";

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

  const limit = query.data.limit ?? 50;
  const takenAtFilter: { gte?: Date; lte?: Date; lt?: Date } = {};
  if (query.data.from) {
    takenAtFilter.gte = new Date(`${query.data.from}T00:00:00.000Z`);
  }
  if (query.data.to) {
    takenAtFilter.lte = new Date(`${query.data.to}T23:59:59.999Z`);
  }
  if (query.data.cursor) {
    takenAtFilter.lt = new Date(query.data.cursor);
  }

  const items = await prisma.adherenceLog.findMany({
    where: {
      patientId,
      ...(Object.keys(takenAtFilter).length > 0 ? { takenAt: takenAtFilter } : {}),
    },
    orderBy: { takenAt: "desc" },
    take: limit,
  });

  const nextCursor = items.length === limit ? items[items.length - 1]?.takenAt?.toISOString() : null;
  return Response.json({ items, nextCursor }, { status: 200 });
}

export async function POST(request: Request): Promise<Response> {
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
}

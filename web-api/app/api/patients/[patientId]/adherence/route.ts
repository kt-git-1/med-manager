import { queryAdherenceSchema } from "@med/validation";
import { parseFamilyAuthToken, verifyFamilyJwt } from "@/lib/auth";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

async function resolveCaregiverId(headers: Headers): Promise<string | null> {
  try {
    const token = parseFamilyAuthToken(headers);
    const payload = await verifyFamilyJwt(token);
    if (!payload.sub) return null;

    const caregiver = await prisma.caregiver.findUnique({
      where: { profileId: payload.sub },
      select: { id: true },
    });
    return caregiver?.id ?? null;
  } catch {
    return null;
  }
}

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  const caregiverId = await resolveCaregiverId(request.headers);
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

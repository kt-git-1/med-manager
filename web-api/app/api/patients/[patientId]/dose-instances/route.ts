import { queryDateSchema } from "@med/validation";
import { parseFamilyAuthToken, verifyFamilyJwt } from "@/lib/auth";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { listDoseInstancesForDate } from "@/lib/doseInstances";
import { prisma } from "@/lib/prisma";
import { serializeDoseInstance } from "@/lib/serializers";

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
  const query = queryDateSchema.safeParse({ date: url.searchParams.get("date") });
  if (!query.success) {
    return invalidInput("Invalid date query");
  }

  const doseInstances = await listDoseInstancesForDate(prisma, patientId, query.data.date);
  return Response.json(doseInstances.map(serializeDoseInstance), { status: 200 });
}

import { patientCreateSchema } from "@med/validation";
import { parseFamilyAuthToken, verifyFamilyJwt } from "../../lib/auth";
import { invalidInput, unauthorized } from "../../lib/errors";
import { prisma } from "../../lib/prisma";
import { serializePatient } from "../../lib/serializers";

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

export async function GET(request: Request): Promise<Response> {
  const caregiverId = await resolveCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const patients = await prisma.patient.findMany({
    where: { caregiverId },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(patients.map(serializePatient), { status: 200 });
}

export async function POST(request: Request): Promise<Response> {
  const caregiverId = await resolveCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const body = patientCreateSchema.safeParse(await request.json());
  if (!body.success) {
    return invalidInput("Invalid request body", { issues: body.error.issues });
  }

  const patient = await prisma.patient.create({
    data: {
      caregiverId,
      displayName: body.data.displayName,
      timezone: body.data.timezone,
    },
  });

  return Response.json(serializePatient(patient), { status: 201 });
}

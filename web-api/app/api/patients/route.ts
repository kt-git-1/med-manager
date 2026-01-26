import { patientCreateSchema } from "@med/validation";
import { invalidInput, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { serializePatient } from "@/lib/serializers";

export const runtime = "nodejs";

export async function GET(request: Request): Promise<Response> {
  const caregiverId = await resolveFamilyCaregiverId(request.headers);
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
  const caregiverId = await resolveFamilyCaregiverId(request.headers);
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

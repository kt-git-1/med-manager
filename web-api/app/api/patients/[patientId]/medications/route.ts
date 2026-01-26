import { medicationCreateSchema } from "@med/validation";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { serializeMedication } from "@/lib/serializers";

export const runtime = "nodejs";

async function assertPatientOwnership(patientId: string, caregiverId: string): Promise<boolean> {
  const patient = await prisma.patient.findFirst({
    where: { id: patientId, caregiverId },
    select: { id: true },
  });
  return Boolean(patient);
}

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  const caregiverId = await resolveFamilyCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const { patientId } = await context.params;
  const hasAccess = await assertPatientOwnership(patientId, caregiverId);
  if (!hasAccess) {
    return notFound("Patient not found");
  }

  const medications = await prisma.medication.findMany({
    where: { patientId },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(medications.map(serializeMedication), { status: 200 });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  const caregiverId = await resolveFamilyCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const { patientId } = await context.params;
  const hasAccess = await assertPatientOwnership(patientId, caregiverId);
  if (!hasAccess) {
    return notFound("Patient not found");
  }

  const body = medicationCreateSchema.safeParse(await request.json());
  if (!body.success) {
    return invalidInput("Invalid request body", { issues: body.error.issues });
  }

  const medication = await prisma.medication.create({
    data: {
      patientId,
      name: body.data.name,
      dosage: body.data.dosage,
      doseCountPerIntake: body.data.doseCountPerIntake,
      notes: body.data.notes ?? null,
      startDate: new Date(body.data.startDate),
      endDate: body.data.endDate ? new Date(body.data.endDate) : null,
      isActive: body.data.isActive ?? true,
    },
  });

  return Response.json(serializeMedication(medication), { status: 201 });
}

import { medicationPatchSchema } from "@med/validation";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { serializeMedication } from "@/lib/serializers";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const caregiverId = await resolveFamilyCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const { id } = await context.params;
  const body = medicationPatchSchema.safeParse(await request.json());
  if (!body.success) {
    return invalidInput("Invalid request body", { issues: body.error.issues });
  }

  const medication = await prisma.medication.findFirst({
    where: { id, patient: { caregiverId } },
  });
  if (!medication) {
    return notFound("Medication not found");
  }

  const updated = await prisma.medication.update({
    where: { id: medication.id },
    data: {
      ...body.data,
      notes: body.data.notes === undefined ? undefined : body.data.notes,
      startDate: body.data.startDate ? new Date(body.data.startDate) : undefined,
      endDate: body.data.endDate ? new Date(body.data.endDate) : undefined,
    },
  });

  return Response.json(serializeMedication(updated), { status: 200 });
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const caregiverId = await resolveFamilyCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const { id } = await context.params;
  const medication = await prisma.medication.findFirst({
    where: { id, patient: { caregiverId } },
    select: { id: true },
  });
  if (!medication) {
    return notFound("Medication not found");
  }

  await prisma.medication.delete({ where: { id: medication.id } });
  return new Response(null, { status: 204 });
}

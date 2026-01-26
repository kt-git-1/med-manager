import { notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { serializeInventory } from "@/lib/serializers";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
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

  const inventory = await prisma.inventory.findMany({
    where: { medication: { patientId } },
    orderBy: { lastAdjustedAt: "desc" },
  });

  return Response.json(inventory.map(serializeInventory), { status: 200 });
}

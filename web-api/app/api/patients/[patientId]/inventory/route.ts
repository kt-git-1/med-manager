import { notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { summarizeInventory } from "@/lib/inventory";
import { serializeInventory } from "@/lib/serializers";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  return withRequestLogging(request, "GET /patients/:patientId/inventory", async () => {
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
      include: {
        medication: {
          select: {
            doseCountPerIntake: true,
            schedules: {
              select: { timeSlots: true, timesPerDay: true, isActive: true },
            },
          },
        },
      },
    });

    const response = inventory.map((item) => {
      const summary = summarizeInventory(
        item.remainingCount,
        item.warningThresholdDays,
        item.medication.doseCountPerIntake,
        item.medication.schedules
      );
      return serializeInventory({
        ...item,
        remainingDays: summary.remainingDays,
        isWarning: summary.isWarning,
      });
    });

    return Response.json(response, { status: 200 });
  });
}

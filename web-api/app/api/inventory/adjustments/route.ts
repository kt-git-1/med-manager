import { inventoryAdjustmentSchema } from "@med/validation";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { prisma } from "@/lib/prisma";
import { serializeInventory } from "@/lib/serializers";
import { withRequestLogging } from "@/lib/requestLogging";

export async function POST(request: Request): Promise<Response> {
  return withRequestLogging(request, "POST /inventory/adjustments", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const body = inventoryAdjustmentSchema.safeParse(await request.json());
    if (!body.success) {
      return invalidInput("Invalid request body", { issues: body.error.issues });
    }

    const medication = await prisma.medication.findFirst({
      where: { id: body.data.medicationId, patient: { caregiverId } },
      select: { id: true },
    });
    if (!medication) {
      return notFound("Medication not found");
    }

    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.inventory.findUnique({
        where: { medicationId: medication.id },
      });
      const nextCount = Math.max(0, (existing?.remainingCount ?? 0) + body.data.delta);
      const inventory = await tx.inventory.upsert({
        where: { medicationId: medication.id },
        update: {
          remainingCount: nextCount,
          lastAdjustedAt: new Date(),
        },
        create: {
          medicationId: medication.id,
          remainingCount: nextCount,
          warningThresholdDays: 3,
        },
      });

      await tx.inventoryAdjustment.create({
        data: {
          inventoryId: inventory.id,
          delta: body.data.delta,
          reason: body.data.reason,
          note: body.data.note ?? null,
        },
      });

      return inventory;
    });

    return Response.json(serializeInventory(result), { status: 201 });
  });
}

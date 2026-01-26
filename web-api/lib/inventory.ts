import type { Prisma, PrismaClient } from "@/prisma/generated";

type PrismaLike = Prisma.TransactionClient | PrismaClient;

export async function applyInventoryDecrement(
  prisma: PrismaLike,
  medicationId: string
): Promise<void> {
  const medication = await prisma.medication.findUnique({
    where: { id: medicationId },
    select: { doseCountPerIntake: true },
  });
  if (!medication) return;

  const inventory = await prisma.inventory.findUnique({
    where: { medicationId },
    select: { id: true, remainingCount: true },
  });
  if (!inventory) return;

  const decrement = medication.doseCountPerIntake;
  const nextRemaining = Math.max(0, inventory.remainingCount - decrement);

  await prisma.inventory.update({
    where: { id: inventory.id },
    data: {
      remainingCount: nextRemaining,
      lastAdjustedAt: new Date(),
    },
  });
}

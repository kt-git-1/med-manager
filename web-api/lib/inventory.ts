import type { Prisma, PrismaClient } from "@/prisma/generated";

type PrismaLike = Prisma.TransactionClient | PrismaClient;

type ScheduleSummary = {
  timeSlots: Date[];
  timesPerDay: number;
  isActive: boolean;
};

export function calculateDailyDose(
  doseCountPerIntake: number,
  schedules: ScheduleSummary[]
): number {
  if (doseCountPerIntake <= 0) return 0;
  const perDay = schedules
    .filter((schedule) => schedule.isActive)
    .reduce((sum, schedule) => {
      const slotCount = schedule.timeSlots.length || schedule.timesPerDay;
      return sum + Math.max(0, slotCount);
    }, 0);
  return perDay * doseCountPerIntake;
}

export function calculateRemainingDays(
  remainingCount: number,
  dailyDose: number
): number | null {
  if (dailyDose <= 0) return null;
  return Math.floor(remainingCount / dailyDose);
}

export function calculateInventoryWarning(
  remainingDays: number | null,
  warningThresholdDays: number
): boolean {
  if (remainingDays === null) return false;
  return remainingDays <= warningThresholdDays;
}

export function summarizeInventory(
  remainingCount: number,
  warningThresholdDays: number,
  doseCountPerIntake: number,
  schedules: ScheduleSummary[]
): { remainingDays: number | null; isWarning: boolean } {
  const dailyDose = calculateDailyDose(doseCountPerIntake, schedules);
  const remainingDays = calculateRemainingDays(remainingCount, dailyDose);
  return {
    remainingDays,
    isWarning: calculateInventoryWarning(remainingDays, warningThresholdDays),
  };
}

export function shouldDecrementInventory(
  action: "taken" | "skipped",
  previousStatus: "pending" | "taken" | "missed" | "skipped"
): boolean {
  return action === "taken" && previousStatus !== "taken";
}

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

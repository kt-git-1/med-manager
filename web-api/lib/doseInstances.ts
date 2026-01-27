import type { Prisma, PrismaClient } from "@/prisma/generated";
import {
  formatISODate,
  formatTimeOfDay,
  resolveWeekdayIndex,
  resolveZonedDateRange,
  zonedTimeToUtc,
} from "./dates";

type PrismaLike = Prisma.TransactionClient | PrismaClient;

export type DoseInstanceSeed = {
  patientId: string;
  medicationId: string;
  scheduleId: string;
  timeSlots: string[];
  date: string; // YYYY-MM-DD
};

export type DoseInstanceDraft = {
  patientId: string;
  medicationId: string;
  scheduleId: string;
  scheduledFor: Date;
};

function parseDateParts(date: string): [number, number, number] {
  const [year, month, day] = date.split("-").map((part) => Number(part));
  return [year, month, day];
}

function parseTimeParts(time: string): [number, number, number] {
  const [h, m, s] = time.split(":").map((part) => Number(part));
  return [h ?? 0, m ?? 0, s ?? 0];
}

export function buildDoseInstancesForDate(seed: DoseInstanceSeed): DoseInstanceDraft[] {
  const [year, month, day] = parseDateParts(seed.date);
  return seed.timeSlots.map((time) => {
    const [hour, minute, second] = parseTimeParts(time);
    const scheduledFor = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    return {
      patientId: seed.patientId,
      medicationId: seed.medicationId,
      scheduleId: seed.scheduleId,
      scheduledFor,
    };
  });
}

function isScheduleActiveForDate(
  startDate: Date,
  endDate: Date | null,
  date: string
): boolean {
  const start = formatISODate(startDate);
  const end = formatISODate(endDate);
  if (!start) return false;
  if (date < start) return false;
  if (end && date > end) return false;
  return true;
}

export async function ensureDoseInstancesForDate(
  prisma: PrismaLike,
  patientId: string,
  date: string
): Promise<void> {
  const patient = await prisma.patient.findUnique({
    where: { id: patientId },
    select: { timezone: true },
  });
  if (!patient) return;

  const schedules = await prisma.schedule.findMany({
    where: {
      isActive: true,
      medication: {
        patientId,
        isActive: true,
      },
    },
    select: {
      id: true,
      medicationId: true,
      daysOfWeek: true,
      startDate: true,
      endDate: true,
      timeSlots: true,
    },
  });

  const weekday = resolveWeekdayIndex(date, patient.timezone);
  const drafts = schedules.flatMap((schedule) => {
    if (!isScheduleActiveForDate(schedule.startDate, schedule.endDate, date)) {
      return [];
    }
    if (schedule.daysOfWeek.length > 0 && !schedule.daysOfWeek.includes(weekday)) {
      return [];
    }

    const timeSlots = schedule.timeSlots.map((slot) => formatTimeOfDay(slot));
    return timeSlots.map((time) => ({
      patientId,
      medicationId: schedule.medicationId,
      scheduleId: schedule.id,
      scheduledFor: zonedTimeToUtc(date, time, patient.timezone),
      status: "pending" as const,
    }));
  });

  if (drafts.length === 0) return;

  await prisma.doseInstance.createMany({
    data: drafts,
    skipDuplicates: true,
  });
}

export async function listDoseInstancesForDate(
  prisma: PrismaLike,
  patientId: string,
  date: string
) {
  const patient = await prisma.patient.findUnique({
    where: { id: patientId },
    select: { timezone: true },
  });
  if (!patient) return [];

  await ensureDoseInstancesForDate(prisma, patientId, date);
  const { from, to } = resolveZonedDateRange(date, patient.timezone);

  return prisma.doseInstance.findMany({
    where: {
      patientId,
      scheduledFor: {
        gte: from,
        lte: to,
      },
    },
    orderBy: { scheduledFor: "asc" },
    include: {
      medication: {
        select: { name: true },
      },
    },
  });
}

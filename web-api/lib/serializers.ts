import type {
  AdherenceLog,
  DoseInstance,
  Inventory,
  Medication,
  Patient,
  Schedule,
} from "@/prisma/generated";
import { formatISODate, formatTimeOfDay } from "./dates";

export function serializePatient(patient: Patient) {
  return {
    id: patient.id,
    displayName: patient.displayName,
    timezone: patient.timezone,
  };
}

export function serializeMedication(medication: Medication) {
  return {
    id: medication.id,
    name: medication.name,
    dosage: medication.dosage,
    doseCountPerIntake: medication.doseCountPerIntake,
    notes: medication.notes ?? null,
    startDate: formatISODate(medication.startDate),
    endDate: formatISODate(medication.endDate),
    isActive: medication.isActive,
  };
}

export function serializeSchedule(schedule: Schedule) {
  return {
    id: schedule.id,
    medicationId: schedule.medicationId,
    daysOfWeek: schedule.daysOfWeek,
    timesPerDay: schedule.timesPerDay,
    timeSlots: schedule.timeSlots.map((slot) => formatTimeOfDay(slot)),
    startDate: formatISODate(schedule.startDate),
    endDate: formatISODate(schedule.endDate),
    isActive: schedule.isActive,
  };
}

type DoseInstanceWithMedication = DoseInstance & {
  medication?: { name: string } | null;
};

export function serializeDoseInstance(instance: DoseInstanceWithMedication) {
  return {
    id: instance.id,
    medicationId: instance.medicationId,
    scheduleId: instance.scheduleId,
    scheduledFor: instance.scheduledFor.toISOString(),
    status: instance.status,
    medicationName: instance.medication?.name ?? null,
  };
}

type InventorySummary = {
  remainingDays?: number | null;
  isWarning?: boolean;
};

export function serializeInventory(inventory: Inventory & InventorySummary) {
  return {
    medicationId: inventory.medicationId,
    remainingCount: inventory.remainingCount,
    warningThresholdDays: inventory.warningThresholdDays,
    lastAdjustedAt: inventory.lastAdjustedAt.toISOString(),
    remainingDays: inventory.remainingDays ?? null,
    isWarning: inventory.isWarning ?? false,
  };
}

type AdherenceLogWithMedication = AdherenceLog & {
  doseInstance?: { medication?: { name: string } | null } | null;
};

export function serializeAdherenceLog(log: AdherenceLogWithMedication) {
  return {
    id: log.id,
    doseInstanceId: log.doseInstanceId,
    patientId: log.patientId,
    action: log.action,
    takenAt: log.takenAt.toISOString(),
    source: log.source,
    clientUuid: log.clientUuid,
    medicationName: log.doseInstance?.medication?.name ?? null,
  };
}

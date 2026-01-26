import type { DoseInstance, Inventory, Medication, Patient, Schedule } from "@/prisma/generated";
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
    timesPerDay: schedule.timesPerDay,
    timeSlots: schedule.timeSlots.map((slot) => formatTimeOfDay(slot)),
    startDate: formatISODate(schedule.startDate),
    endDate: formatISODate(schedule.endDate),
    isActive: schedule.isActive,
  };
}

export function serializeDoseInstance(instance: DoseInstance) {
  return {
    id: instance.id,
    medicationId: instance.medicationId,
    scheduleId: instance.scheduleId,
    scheduledFor: instance.scheduledFor.toISOString(),
    status: instance.status,
  };
}

export function serializeInventory(inventory: Inventory) {
  return {
    medicationId: inventory.medicationId,
    remainingCount: inventory.remainingCount,
    warningThresholdDays: inventory.warningThresholdDays,
    lastAdjustedAt: inventory.lastAdjustedAt.toISOString(),
  };
}

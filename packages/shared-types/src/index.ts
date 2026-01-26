export type Id = string;

export type ISODate = string;
export type ISODateTime = string;

export type ProfileRole = "family";

export type DoseStatus = "pending" | "taken" | "missed" | "skipped";

export type AdherenceAction = "taken" | "skipped";

export type AdherenceSource = "patient" | "family" | "system";

export type InventoryAdjustmentReason = "missed" | "extra" | "restock" | "manual";

export type Patient = {
  id: Id;
  displayName: string;
  timezone: string;
};

export type Medication = {
  id: Id;
  patientId: Id;
  name: string;
  dosage: string;
  doseCountPerIntake: number;
  notes?: string | null;
  startDate: ISODate;
  endDate?: ISODate | null;
  isActive: boolean;
};

export type Schedule = {
  id: Id;
  medicationId: Id;
  timesPerDay: number;
  timeSlots: string[];
  startDate: ISODate;
  endDate?: ISODate | null;
  isActive: boolean;
};

export type DoseInstance = {
  id: Id;
  patientId: Id;
  scheduleId: Id;
  medicationId: Id;
  scheduledFor: ISODateTime;
  status: DoseStatus;
};

export type AdherenceLog = {
  id: Id;
  doseInstanceId: Id;
  patientId: Id;
  action: AdherenceAction;
  takenAt: ISODateTime;
  source: AdherenceSource;
  clientUuid: string;
};

export type Inventory = {
  medicationId: Id;
  remainingCount: number;
  warningThresholdDays: number;
  lastAdjustedAt: ISODateTime;
};

export type InventoryAdjustment = {
  medicationId: Id;
  delta: number;
  reason: InventoryAdjustmentReason;
  note?: string;
};

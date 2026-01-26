import { z } from "zod";

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const isoDateTime = z.string().datetime();
const timeOfDay = z
  .string()
  .regex(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/);

export const errorResponseSchema = z.object({
  code: z.enum([
    "unauthorized",
    "forbidden",
    "invalid_input",
    "not_found",
    "conflict",
    "rate_limited",
  ]),
  message: z.string(),
  details: z.record(z.string(), z.unknown()).optional(),
});

export const linkCodeCreateRequestSchema = z.object({
  patientId: z.string(),
  ttlMinutes: z.number().int().min(1).max(1440).optional(),
});

export const linkCodeSchema = z.object({
  code: z.string(),
  expiresAt: isoDateTime,
});

export const linkCodeVerifyRequestSchema = z.object({
  code: z.string(),
});

export const patientSessionSchema = z.object({
  accessToken: z.string(),
  expiresIn: z.number().int(),
});

export const patientSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  timezone: z.string(),
});

export const patientCreateSchema = z.object({
  displayName: z.string(),
  timezone: z.string(),
});

export const medicationSchema = z.object({
  id: z.string(),
  name: z.string(),
  dosage: z.string(),
  doseCountPerIntake: z.number().int().min(1),
  notes: z.string().nullable().optional(),
  startDate: isoDate,
  endDate: isoDate.nullable().optional(),
  isActive: z.boolean(),
});

export const medicationCreateSchema = z.object({
  name: z.string(),
  dosage: z.string(),
  doseCountPerIntake: z.number().int().min(1),
  notes: z.string().nullable().optional(),
  startDate: isoDate,
  endDate: isoDate.nullable().optional(),
  isActive: z.boolean().optional(),
});

export const medicationPatchSchema = z.object({
  name: z.string().optional(),
  dosage: z.string().optional(),
  doseCountPerIntake: z.number().int().min(1).optional(),
  notes: z.string().nullable().optional(),
  startDate: isoDate.optional(),
  endDate: isoDate.nullable().optional(),
  isActive: z.boolean().optional(),
});

export const scheduleSchema = z.object({
  id: z.string(),
  medicationId: z.string(),
  timesPerDay: z.number().int().min(1),
  timeSlots: z.array(timeOfDay),
  startDate: isoDate,
  endDate: isoDate.nullable().optional(),
  isActive: z.boolean(),
});

export const scheduleCreateSchema = z.object({
  medicationId: z.string(),
  timesPerDay: z.number().int().min(1),
  timeSlots: z.array(timeOfDay),
  startDate: isoDate,
  endDate: isoDate.nullable().optional(),
  isActive: z.boolean().optional(),
});

export const doseInstanceSchema = z.object({
  id: z.string(),
  medicationId: z.string(),
  scheduleId: z.string(),
  scheduledFor: isoDateTime,
  status: z.enum(["pending", "taken", "missed", "skipped"]),
});

export const adherenceLogSchema = z.object({
  id: z.string(),
  doseInstanceId: z.string(),
  patientId: z.string(),
  action: z.enum(["taken", "skipped"]),
  takenAt: isoDateTime,
  source: z.enum(["patient", "family", "system"]),
  clientUuid: z.string().uuid(),
});

export const adherenceCreateSchema = z.object({
  doseInstanceId: z.string(),
  action: z.enum(["taken", "skipped"]),
  takenAt: isoDateTime,
  clientUuid: z.string().uuid(),
});

export const inventorySchema = z.object({
  medicationId: z.string(),
  remainingCount: z.number().int().min(0),
  warningThresholdDays: z.number().int().min(1),
  lastAdjustedAt: isoDateTime,
});

export const inventoryAdjustmentSchema = z.object({
  medicationId: z.string(),
  delta: z.number().int(),
  reason: z.enum(["missed", "extra", "restock", "manual"]),
  note: z.string().optional(),
});

export const paginatedAdherenceLogsSchema = z.object({
  items: z.array(adherenceLogSchema),
  nextCursor: z.string().nullable(),
});

export const queryDateSchema = z.object({
  date: isoDate,
});

export const queryAdherenceSchema = z.object({
  from: isoDate.optional(),
  to: isoDate.optional(),
  cursor: z.string().optional(),
  limit: z.number().int().min(1).max(200).optional(),
});
export { z } from "zod";

import { scheduleCreateSchema } from "@med/validation";
import { parseFamilyAuthToken, verifyFamilyJwt } from "../../../../lib/auth";
import { invalidInput, notFound, unauthorized } from "../../../../lib/errors";
import { prisma } from "../../../../lib/prisma";
import { timeOfDayToDate } from "../../../../lib/dates";
import { serializeSchedule } from "../../../../lib/serializers";

export const runtime = "nodejs";

async function resolveCaregiverId(headers: Headers): Promise<string | null> {
  try {
    const token = parseFamilyAuthToken(headers);
    const payload = await verifyFamilyJwt(token);
    if (!payload.sub) return null;

    const caregiver = await prisma.caregiver.findUnique({
      where: { profileId: payload.sub },
      select: { id: true },
    });
    return caregiver?.id ?? null;
  } catch {
    return null;
  }
}

async function assertPatientOwnership(patientId: string, caregiverId: string): Promise<boolean> {
  const patient = await prisma.patient.findFirst({
    where: { id: patientId, caregiverId },
    select: { id: true },
  });
  return Boolean(patient);
}

export async function GET(
  request: Request,
  context: { params: { patientId: string } }
): Promise<Response> {
  const caregiverId = await resolveCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const patientId = context.params.patientId;
  const hasAccess = await assertPatientOwnership(patientId, caregiverId);
  if (!hasAccess) {
    return notFound("Patient not found");
  }

  const schedules = await prisma.schedule.findMany({
    where: { medication: { patientId } },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(schedules.map(serializeSchedule), { status: 200 });
}

export async function POST(
  request: Request,
  context: { params: { patientId: string } }
): Promise<Response> {
  const caregiverId = await resolveCaregiverId(request.headers);
  if (!caregiverId) {
    return unauthorized("Caregiver not found");
  }

  const patientId = context.params.patientId;
  const hasAccess = await assertPatientOwnership(patientId, caregiverId);
  if (!hasAccess) {
    return notFound("Patient not found");
  }

  const body = scheduleCreateSchema.safeParse(await request.json());
  if (!body.success) {
    return invalidInput("Invalid request body", { issues: body.error.issues });
  }

  if (body.data.timeSlots.length !== body.data.timesPerDay) {
    return invalidInput("timeSlots length must match timesPerDay");
  }

  const medication = await prisma.medication.findFirst({
    where: { id: body.data.medicationId, patientId },
    select: { id: true },
  });
  if (!medication) {
    return notFound("Medication not found");
  }

  const schedule = await prisma.schedule.create({
    data: {
      medicationId: medication.id,
      timesPerDay: body.data.timesPerDay,
      timeSlots: body.data.timeSlots.map((slot) => timeOfDayToDate(slot)),
      startDate: new Date(body.data.startDate),
      endDate: body.data.endDate ? new Date(body.data.endDate) : null,
      isActive: body.data.isActive ?? true,
    },
  });

  return Response.json(serializeSchedule(schedule), { status: 201 });
}

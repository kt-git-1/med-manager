import { scheduleCreateSchema } from "@med/validation";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { timeOfDayToDate } from "@/lib/dates";
import { serializeSchedule } from "@/lib/serializers";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

async function assertPatientOwnership(patientId: string, caregiverId: string): Promise<boolean> {
  const patient = await prisma.patient.findFirst({
    where: { id: patientId, caregiverId },
    select: { id: true },
  });
  return Boolean(patient);
}

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  return withRequestLogging(request, "GET /patients/:patientId/schedules", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const { patientId } = await context.params;
    const hasAccess = await assertPatientOwnership(patientId, caregiverId);
    if (!hasAccess) {
      return notFound("Patient not found");
    }

    const schedules = await prisma.schedule.findMany({
      where: { medication: { patientId } },
      orderBy: { createdAt: "desc" },
    });

    return Response.json(schedules.map(serializeSchedule), { status: 200 });
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  return withRequestLogging(request, "POST /patients/:patientId/schedules", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const { patientId } = await context.params;
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
        timeSlots: body.data.timeSlots.map((slot: string) => timeOfDayToDate(slot)),
        startDate: new Date(body.data.startDate),
        endDate: body.data.endDate ? new Date(body.data.endDate) : null,
        isActive: body.data.isActive ?? true,
      },
    });

    return Response.json(serializeSchedule(schedule), { status: 201 });
  });
}

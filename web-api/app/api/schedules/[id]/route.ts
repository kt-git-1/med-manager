import { schedulePatchSchema } from "@med/validation";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { timeOfDayToDate } from "@/lib/dates";
import { serializeSchedule } from "@/lib/serializers";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  return withRequestLogging(request, "PATCH /schedules/:id", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const { id } = await context.params;
    const body = schedulePatchSchema.safeParse(await request.json());
    if (!body.success) {
      return invalidInput("Invalid request body", { issues: body.error.issues });
    }

    const schedule = await prisma.schedule.findFirst({
      where: { id, medication: { patient: { caregiverId } } },
    });
    if (!schedule) {
      return notFound("Schedule not found");
    }

    const nextDaysOfWeek = body.data.daysOfWeek ?? schedule.daysOfWeek;
    if (nextDaysOfWeek.length === 0) {
      return invalidInput("daysOfWeek must include at least one day");
    }

    const nextTimesPerDay = body.data.timesPerDay ?? schedule.timesPerDay;
    const nextTimeSlotsCount = body.data.timeSlots?.length ?? schedule.timeSlots.length;
    if (nextTimeSlotsCount !== nextTimesPerDay) {
      return invalidInput("timeSlots length must match timesPerDay");
    }

    const updated = await prisma.schedule.update({
      where: { id: schedule.id },
      data: {
        daysOfWeek: body.data.daysOfWeek ?? undefined,
        timesPerDay: body.data.timesPerDay ?? undefined,
        timeSlots: body.data.timeSlots
          ? body.data.timeSlots.map((slot) => timeOfDayToDate(slot))
          : undefined,
        startDate: body.data.startDate ? new Date(body.data.startDate) : undefined,
        endDate:
          body.data.endDate === undefined
            ? undefined
            : body.data.endDate
              ? new Date(body.data.endDate)
              : null,
        isActive: body.data.isActive ?? undefined,
      },
    });

    return Response.json(serializeSchedule(updated), { status: 200 });
  });
}

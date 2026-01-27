import { queryAdherenceSchema } from "@med/validation";
import { invalidInput, notFound, unauthorized } from "@/lib/errors";
import { resolveFamilyCaregiverId } from "@/lib/caregivers";
import { prisma } from "@/lib/prisma";
import { listAdherenceLogs } from "@/lib/adherence";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  context: { params: Promise<{ patientId: string }> }
): Promise<Response> {
  return withRequestLogging(request, "GET /patients/:patientId/adherence", async () => {
    const caregiverId = await resolveFamilyCaregiverId(request.headers);
    if (!caregiverId) {
      return unauthorized("Caregiver not found");
    }

    const { patientId } = await context.params;
    const patient = await prisma.patient.findFirst({
      where: { id: patientId, caregiverId },
      select: { id: true },
    });
    if (!patient) {
      return notFound("Patient not found");
    }

    const url = new URL(request.url);
    const query = queryAdherenceSchema.safeParse({
      from: url.searchParams.get("from") ?? undefined,
      to: url.searchParams.get("to") ?? undefined,
      cursor: url.searchParams.get("cursor") ?? undefined,
      limit: url.searchParams.get("limit") ? Number(url.searchParams.get("limit")) : undefined,
    });
    if (!query.success) {
      return invalidInput("Invalid query");
    }

    const result = await listAdherenceLogs(prisma, {
      patientId,
      from: query.data.from,
      to: query.data.to,
      cursor: query.data.cursor,
      limit: query.data.limit,
    });
    return Response.json(result, { status: 200 });
  });
}

import { queryDateSchema } from "@med/validation";
import { parsePatientAuthToken } from "../../../lib/auth";
import { invalidInput, unauthorized } from "../../../lib/errors";
import { listDoseInstancesForDate } from "../../../lib/doseInstances";
import { hashPatientToken } from "../../../lib/patientTokens";
import { prisma } from "../../../lib/prisma";
import { serializeDoseInstance } from "../../../lib/serializers";

export const runtime = "nodejs";

async function resolvePatientId(headers: Headers): Promise<string | null> {
  try {
    const token = parsePatientAuthToken(headers);
    const secret = process.env.PATIENT_TOKEN_SECRET;
    if (!secret) return null;

    const tokenHash = hashPatientToken(secret, token);
    const session = await prisma.patientSession.findFirst({
      where: {
        tokenHash,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
      select: { patientId: true },
    });
    return session?.patientId ?? null;
  } catch {
    return null;
  }
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const query = queryDateSchema.safeParse({ date: url.searchParams.get("date") });
  if (!query.success) {
    return invalidInput("Invalid date query");
  }

  const patientId = await resolvePatientId(request.headers);
  if (!patientId) {
    return unauthorized("Invalid patient session");
  }

  const doseInstances = await listDoseInstancesForDate(prisma, patientId, query.data.date);
  return Response.json(doseInstances.map(serializeDoseInstance), { status: 200 });
}

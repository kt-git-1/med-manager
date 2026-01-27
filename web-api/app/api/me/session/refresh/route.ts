import { randomBytes } from "crypto";
import { parsePatientAuthToken } from "@/lib/auth";
import { invalidInput, unauthorized } from "@/lib/errors";
import { hashPatientToken } from "@/lib/patientTokens";
import { prisma } from "@/lib/prisma";
import { withRequestLogging } from "@/lib/requestLogging";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  return withRequestLogging(request, "POST /me/session/refresh", async () => {
    try {
      const token = parsePatientAuthToken(request.headers);
      const secret = process.env.PATIENT_TOKEN_SECRET;
      if (!secret) {
        return invalidInput("Missing PATIENT_TOKEN_SECRET");
      }

      const now = new Date();
      const tokenHash = hashPatientToken(secret, token);
      const currentSession = await prisma.patientSession.findFirst({
        where: {
          tokenHash,
          revokedAt: null,
        },
        select: {
          id: true,
          patientId: true,
        },
      });

      if (!currentSession) {
        return unauthorized("Invalid patient session");
      }

      const ttlMinutes = Number(process.env.PATIENT_TOKEN_TTL_MINUTES ?? 60);
      const expiresAt = new Date(now.getTime() + ttlMinutes * 60_000);
      const rawToken = randomBytes(32).toString("base64url");
      const newTokenHash = hashPatientToken(secret, rawToken);

      await prisma.$transaction([
        prisma.patientSession.update({
          where: { id: currentSession.id },
          data: { revokedAt: now },
        }),
        prisma.patientSession.create({
          data: {
            patientId: currentSession.patientId,
            tokenHash: newTokenHash,
            expiresAt,
            rotatedFromId: currentSession.id,
          },
        }),
      ]);

      return Response.json(
        {
          accessToken: rawToken,
          expiresIn: ttlMinutes * 60,
        },
        { status: 200 }
      );
    } catch {
      return unauthorized("Invalid patient session");
    }
  });
}

import { randomBytes } from "crypto";
import { linkCodeVerifyRequestSchema } from "@med/validation";
import { invalidInput, notFound } from "@/lib/errors";
import { hashPatientToken } from "@/lib/patientTokens";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const body = linkCodeVerifyRequestSchema.safeParse(await request.json());
  if (!body.success) {
    return invalidInput("Invalid request body", { issues: body.error.issues });
  }

  const now = new Date();
  const linkCode = await prisma.linkCode.findFirst({
    where: {
      code: body.data.code,
      usedAt: null,
      revokedAt: null,
      expiresAt: { gt: now },
    },
    select: {
      id: true,
      patientId: true,
    },
  });

  if (!linkCode?.patientId) {
    return notFound("Link code not found");
  }

  const secret = process.env.PATIENT_TOKEN_SECRET;
  if (!secret) {
    return invalidInput("Missing PATIENT_TOKEN_SECRET");
  }

  const ttlMinutes = Number(process.env.PATIENT_TOKEN_TTL_MINUTES ?? 60);
  const expiresAt = new Date(now.getTime() + ttlMinutes * 60_000);
  const rawToken = randomBytes(32).toString("base64url");
  const tokenHash = hashPatientToken(secret, rawToken);

  await prisma.$transaction([
    prisma.linkCode.update({
      where: { id: linkCode.id },
      data: { usedAt: now },
    }),
    prisma.patientSession.updateMany({
      where: { patientId: linkCode.patientId, revokedAt: null },
      data: { revokedAt: now },
    }),
    prisma.patientSession.create({
      data: {
        patientId: linkCode.patientId,
        tokenHash,
        expiresAt,
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
}

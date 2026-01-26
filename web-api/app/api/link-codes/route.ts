import { randomInt } from "crypto";
import { linkCodeCreateRequestSchema } from "@med/validation";
import { parseFamilyAuthToken, verifyFamilyJwt } from "@/lib/auth";
import { conflict, invalidInput, notFound, unauthorized } from "@/lib/errors";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

function buildCode(): string {
  return randomInt(0, 1_000_000).toString().padStart(6, "0");
}

export async function POST(request: Request): Promise<Response> {
  try {
    const token = parseFamilyAuthToken(request.headers);
    const payload = await verifyFamilyJwt(token);
    if (!payload.sub) {
      return unauthorized("Missing user id");
    }

    const body = linkCodeCreateRequestSchema.safeParse(await request.json());
    if (!body.success) {
      return invalidInput("Invalid request body", { issues: body.error.issues });
    }

    const caregiver = await prisma.caregiver.findUnique({
      where: { profileId: payload.sub },
    });
    if (!caregiver) {
      return unauthorized("Caregiver profile not found");
    }

    const patient = await prisma.patient.findFirst({
      where: {
        id: body.data.patientId,
        caregiverId: caregiver.id,
      },
      select: { id: true },
    });
    if (!patient) {
      return notFound("Patient not found");
    }

    const ttlMinutes = body.data.ttlMinutes ?? 10;
    const expiresAt = new Date(Date.now() + ttlMinutes * 60_000);

    let code = "";
    let existing: { id: string } | null = null;
    for (let attempt = 0; attempt < 5; attempt += 1) {
      code = buildCode();
      existing = await prisma.linkCode.findFirst({
        where: {
          code,
          usedAt: null,
          revokedAt: null,
          expiresAt: {
            gt: new Date(),
          },
        },
        select: { id: true },
      });
      if (!existing) break;
    }
    if (existing) {
      return conflict("Failed to generate unique link code");
    }

    const linkCode = await prisma.linkCode.create({
      data: {
        caregiverId: caregiver.id,
        patientId: patient.id,
        code,
        expiresAt,
      },
      select: { code: true, expiresAt: true },
    });

    return Response.json(linkCode, { status: 201 });
  } catch (error) {
    return unauthorized("Unauthorized");
  }
}

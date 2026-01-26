import { type AuthPayload, parseFamilyAuthToken, verifyFamilyJwt } from "@/lib/auth";
import logger from "@/lib/logger";
import { prisma } from "@/lib/prisma";

function resolveDisplayName(payload: AuthPayload): string {
  const email = payload.email;
  if (typeof email === "string" && email.trim()) {
    return email;
  }
  return "Family";
}

async function resolveOrCreateCaregiverId(payload: AuthPayload): Promise<string | null> {
  if (!payload.sub) return null;

  const existing = await prisma.caregiver.findUnique({
    where: { profileId: payload.sub },
    select: { id: true },
  });
  if (existing) return existing.id;

  const displayName = resolveDisplayName(payload);
  try {
    const caregiver = await prisma.caregiver.create({
      data: {
        profile: {
          connectOrCreate: {
            where: { id: payload.sub },
            create: { id: payload.sub },
          },
        },
        displayName,
      },
      select: { id: true },
    });
    return caregiver.id;
  } catch {
    const fallback = await prisma.caregiver.findUnique({
      where: { profileId: payload.sub },
      select: { id: true },
    });
    return fallback?.id ?? null;
  }
}

export async function resolveFamilyCaregiverId(headers: Headers): Promise<string | null> {
  try {
    const token = parseFamilyAuthToken(headers);
    const payload = await verifyFamilyJwt(token);
    return await resolveOrCreateCaregiverId(payload);
  } catch (error) {
    logger.warn(
      {
        reason: error instanceof Error ? error.message : String(error),
      },
      "familyAuth.resolveFailed"
    );
    return null;
  }
}

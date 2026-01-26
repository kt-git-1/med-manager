export type LinkCodeRecord = {
  expiresAt: Date;
  usedAt?: Date | null;
  revokedAt?: Date | null;
};

export function isLinkCodeValid(record: LinkCodeRecord, now: Date = new Date()): boolean {
  if (record.usedAt) return false;
  if (record.revokedAt) return false;
  if (record.expiresAt.getTime() <= now.getTime()) return false;
  return true;
}

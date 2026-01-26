import { prisma } from "../prisma";

export async function pingDb(): Promise<boolean> {
  const result = await prisma.$queryRaw<{ ok: number }[]>`select 1 as ok`;
  return result[0]?.ok === 1;
}

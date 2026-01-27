import type { AdherenceLog, Prisma, PrismaClient } from "@/prisma/generated";
import { serializeAdherenceLog } from "@/lib/serializers";

type PrismaLike = Prisma.TransactionClient | PrismaClient;

export type AdherenceQuery = {
  patientId: string;
  from?: string;
  to?: string;
  cursor?: string;
  limit?: number;
};

type AdherenceLogWithMedication = AdherenceLog & {
  doseInstance?: { medication?: { name: string } | null } | null;
};

type DateFilters = {
  gte?: Date;
  lte?: Date;
  lt?: Date;
};

function buildTakenAtFilter(query: Omit<AdherenceQuery, "patientId">): DateFilters {
  const takenAtFilter: DateFilters = {};
  if (query.from) {
    takenAtFilter.gte = new Date(`${query.from}T00:00:00.000Z`);
  }
  if (query.to) {
    takenAtFilter.lte = new Date(`${query.to}T23:59:59.999Z`);
  }
  if (query.cursor) {
    takenAtFilter.lt = new Date(query.cursor);
  }
  return takenAtFilter;
}

export function paginateAdherenceLogs<T extends { takenAt: Date }>(
  items: T[],
  query: Omit<AdherenceQuery, "patientId">
): { items: T[]; nextCursor: string | null } {
  const limit = query.limit ?? 50;
  const takenAtFilter = buildTakenAtFilter(query);
  const filtered = items.filter((item) => {
    if (takenAtFilter.gte && item.takenAt < takenAtFilter.gte) {
      return false;
    }
    if (takenAtFilter.lte && item.takenAt > takenAtFilter.lte) {
      return false;
    }
    if (takenAtFilter.lt && item.takenAt >= takenAtFilter.lt) {
      return false;
    }
    return true;
  });
  const sorted = [...filtered].sort(
    (a, b) => b.takenAt.getTime() - a.takenAt.getTime()
  );
  const pageItems = sorted.slice(0, limit);
  const nextCursor =
    pageItems.length === limit
      ? pageItems[pageItems.length - 1]?.takenAt?.toISOString()
      : null;
  return { items: pageItems, nextCursor };
}

export async function listAdherenceLogs(
  prismaClient: PrismaLike,
  query: AdherenceQuery
): Promise<{ items: ReturnType<typeof serializeAdherenceLog>[]; nextCursor: string | null }> {
  const limit = query.limit ?? 50;
  const takenAtFilter = buildTakenAtFilter(query);
  const items = await prismaClient.adherenceLog.findMany({
    where: {
      patientId: query.patientId,
      ...(Object.keys(takenAtFilter).length > 0 ? { takenAt: takenAtFilter } : {}),
    },
    orderBy: { takenAt: "desc" },
    take: limit,
    include: {
      doseInstance: {
        select: {
          medication: { select: { name: true } },
        },
      },
    },
  });

  const nextCursor =
    items.length === limit ? items[items.length - 1]?.takenAt?.toISOString() : null;
  return {
    items: (items as AdherenceLogWithMedication[]).map(serializeAdherenceLog),
    nextCursor,
  };
}


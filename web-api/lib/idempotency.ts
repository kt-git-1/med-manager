export type ClientUuidRecord = {
  clientUuid: string;
};

export function findByClientUuid<T extends ClientUuidRecord>(
  records: T[],
  clientUuid: string
): T | null {
  const record = records.find((item) => item.clientUuid === clientUuid);
  return record ?? null;
}

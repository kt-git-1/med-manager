import { describe, expect, it } from "vitest";
import { paginateAdherenceLogs } from "@/lib/adherence";

describe("adherence pagination", () => {
  const logs = [
    { id: "a", takenAt: new Date("2026-01-04T08:00:00.000Z") },
    { id: "b", takenAt: new Date("2026-01-05T20:00:00.000Z") },
    { id: "c", takenAt: new Date("2026-01-03T12:00:00.000Z") },
    { id: "d", takenAt: new Date("2026-01-02T09:00:00.000Z") },
  ];

  it("applies limit and cursor", () => {
    const firstPage = paginateAdherenceLogs(logs, { limit: 2 });
    expect(firstPage.items).toHaveLength(2);
    expect(firstPage.items[0].id).toBe("b");
    expect(firstPage.items[1].id).toBe("a");
    expect(firstPage.nextCursor).toBe("2026-01-04T08:00:00.000Z");

    const secondPage = paginateAdherenceLogs(logs, {
      limit: 2,
      cursor: firstPage.nextCursor ?? undefined,
    });
    expect(secondPage.items.map((item) => item.id)).toEqual(["c", "d"]);
  });

  it("applies from/to filters", () => {
    const filtered = paginateAdherenceLogs(logs, {
      from: "2026-01-03",
      to: "2026-01-04",
    });
    expect(filtered.items.map((item) => item.id)).toEqual(["a", "c"]);
  });
});

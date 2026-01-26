import { describe, expect, it } from "vitest";
import { findByClientUuid } from "../lib/idempotency";

describe("adherence idempotency", () => {
  it("returns existing record for same clientUuid", () => {
    const records = [
      { id: "a", clientUuid: "uuid-1" },
      { id: "b", clientUuid: "uuid-2" },
    ];
    const found = findByClientUuid(records, "uuid-2");
    expect(found?.id).toBe("b");
  });

  it("returns null when clientUuid is new", () => {
    const records = [{ id: "a", clientUuid: "uuid-1" }];
    const found = findByClientUuid(records, "uuid-3");
    expect(found).toBeNull();
  });
});

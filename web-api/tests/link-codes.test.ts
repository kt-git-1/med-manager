import { describe, expect, it } from "vitest";
import { isLinkCodeValid } from "@/lib/linkCodes";

describe("link code validation", () => {
  it("rejects expired codes", () => {
    const expired = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-01-02T00:00:00Z");
    expect(isLinkCodeValid({ expiresAt: expired }, now)).toBe(false);
  });

  it("rejects used or revoked codes", () => {
    const expiresAt = new Date("2026-02-01T00:00:00Z");
    expect(isLinkCodeValid({ expiresAt, usedAt: new Date() })).toBe(false);
    expect(isLinkCodeValid({ expiresAt, revokedAt: new Date() })).toBe(false);
  });

  it("accepts active unexpired codes", () => {
    const expiresAt = new Date("2026-02-01T00:00:00Z");
    const now = new Date("2026-01-31T00:00:00Z");
    expect(isLinkCodeValid({ expiresAt }, now)).toBe(true);
  });
});

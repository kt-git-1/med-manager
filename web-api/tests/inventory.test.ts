import { describe, expect, it } from "vitest";
import { shouldDecrementInventory } from "@/lib/inventory";

describe("inventory decrement", () => {
  it("decrements only for taken action", () => {
    expect(shouldDecrementInventory("taken", "pending")).toBe(true);
    expect(shouldDecrementInventory("skipped", "pending")).toBe(false);
  });

  it("does not decrement when already taken", () => {
    expect(shouldDecrementInventory("taken", "taken")).toBe(false);
  });
});

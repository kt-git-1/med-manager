import { describe, expect, it } from "vitest";
import { buildDoseInstancesForDate } from "@/lib/doseInstances";

describe("dose instance generation", () => {
  it("creates instances for each time slot on the date", () => {
    const drafts = buildDoseInstancesForDate({
      patientId: "patient-1",
      medicationId: "med-1",
      scheduleId: "schedule-1",
      timeSlots: ["08:00", "20:00"],
      date: "2026-01-25",
    });

    expect(drafts).toHaveLength(2);
    expect(drafts[0].patientId).toBe("patient-1");
    expect(drafts[0].scheduleId).toBe("schedule-1");
    expect(drafts[0].scheduledFor.toISOString()).toBe("2026-01-25T08:00:00.000Z");
    expect(drafts[1].scheduledFor.toISOString()).toBe("2026-01-25T20:00:00.000Z");
  });
});

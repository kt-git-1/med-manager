import { describe, expect, it } from "vitest";
import { AuthError, parseFamilyAuthToken, parsePatientAuthToken } from "@/lib/auth";

describe("auth header parsing", () => {
  it("accepts family bearer token", () => {
    const token = parseFamilyAuthToken({ authorization: "Bearer family.jwt.token" });
    expect(token).toBe("family.jwt.token");
  });

  it("rejects non-bearer family auth", () => {
    expect(() => parseFamilyAuthToken({ authorization: "Patient abc" })).toThrow(AuthError);
  });

  it("accepts patient token prefix", () => {
    const token = parsePatientAuthToken({ authorization: "Patient patient.token" });
    expect(token).toBe("patient.token");
  });

  it("rejects non-patient prefix", () => {
    expect(() => parsePatientAuthToken({ authorization: "Bearer abc" })).toThrow(AuthError);
  });
});

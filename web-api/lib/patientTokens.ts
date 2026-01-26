import { createHmac } from "crypto";

export function hashPatientToken(secret: string, token: string): string {
  return createHmac("sha256", secret).update(token).digest("hex");
}

import { createRemoteJWKSet, decodeJwt, decodeProtectedHeader, jwtVerify } from "jose";
import logger from "@/lib/logger";

export type AuthPayload = {
  sub?: string;
  role?: string;
  [key: string]: unknown;
};

export class AuthError extends Error {
  readonly code: "unauthorized" | "forbidden";
  readonly status: number;

  constructor(message: string, code: "unauthorized" | "forbidden" = "unauthorized") {
    super(message);
    this.code = code;
    this.status = code === "forbidden" ? 403 : 401;
  }
}

type HeaderSource =
  | Headers
  | {
      authorization?: string;
      Authorization?: string;
    };

const FAMILY_PREFIX = "Bearer ";
const PATIENT_PREFIX = "Patient ";

function getAuthorizationHeader(headers: HeaderSource): string | undefined {
  if (headers instanceof Headers) {
    return headers.get("authorization") ?? headers.get("Authorization") ?? undefined;
  }

  return headers.authorization ?? headers.Authorization;
}

export function parseFamilyAuthToken(headers: HeaderSource): string {
  const auth = getAuthorizationHeader(headers);
  if (!auth?.startsWith(FAMILY_PREFIX)) {
    throw new AuthError("Missing or invalid family Authorization header");
  }

  const token = auth.slice(FAMILY_PREFIX.length).trim();
  if (!token) {
    throw new AuthError("Empty family token");
  }

  return token;
}

export function parsePatientAuthToken(headers: HeaderSource): string {
  const auth = getAuthorizationHeader(headers);
  if (!auth?.startsWith(PATIENT_PREFIX)) {
    throw new AuthError("Missing or invalid patient Authorization header");
  }

  const token = auth.slice(PATIENT_PREFIX.length).trim();
  if (!token) {
    throw new AuthError("Empty patient token");
  }

  return token;
}

export async function verifyFamilyJwt(token: string): Promise<AuthPayload> {
  try {
    const header = decodeProtectedHeader(token);
    const algorithm = header.alg ?? "unknown";
    if (algorithm.startsWith("HS")) {
      const secret =
        process.env.SUPABASE_JWT_SECRET ??
        process.env.JWT_SECRET ??
        process.env.SUPABASE_SERVICE_ROLE_KEY;
      if (!secret) {
        throw new AuthError("Missing SUPABASE_JWT_SECRET");
      }
      const encoder = new TextEncoder();
      const { payload } = await jwtVerify(token, encoder.encode(secret));
      return payload as AuthPayload;
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    if (!supabaseUrl) {
      throw new AuthError("Missing SUPABASE_URL");
    }
    const jwks = createRemoteJWKSet(new URL(`${supabaseUrl}/auth/v1/.well-known/jwks.json`));
    const { payload } = await jwtVerify(token, jwks);
    return payload as AuthPayload;
  } catch (error) {
    try {
      const decoded = decodeJwt(token);
      logger.warn(
        {
          reason: error instanceof Error ? error.message : String(error),
          iss: typeof decoded.iss === "string" ? decoded.iss : undefined,
          aud: decoded.aud,
        },
        "familyJwt.verifyFailed"
      );
    } catch {
      logger.warn(
        {
          reason: error instanceof Error ? error.message : String(error),
        },
        "familyJwt.verifyFailed"
      );
    }
    throw error;
  }
}

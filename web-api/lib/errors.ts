export type ErrorCode =
  | "unauthorized"
  | "forbidden"
  | "invalid_input"
  | "not_found"
  | "conflict"
  | "rate_limited";

export type ErrorResponse = {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
};

export function jsonError(
  code: ErrorCode,
  message: string,
  status: number,
  details?: Record<string, unknown>
): Response {
  const body: ErrorResponse = { code, message };
  if (details && Object.keys(details).length > 0) {
    body.details = details;
  }

  return Response.json(body, { status });
}

export function invalidInput(message: string, details?: Record<string, unknown>): Response {
  return jsonError("invalid_input", message, 400, details);
}

export function unauthorized(message = "Unauthorized", details?: Record<string, unknown>): Response {
  return jsonError("unauthorized", message, 401, details);
}

export function forbidden(message = "Forbidden", details?: Record<string, unknown>): Response {
  return jsonError("forbidden", message, 403, details);
}

export function notFound(message = "Not found", details?: Record<string, unknown>): Response {
  return jsonError("not_found", message, 404, details);
}

export function conflict(message = "Conflict", details?: Record<string, unknown>): Response {
  return jsonError("conflict", message, 409, details);
}

export function rateLimited(message = "Too many requests", details?: Record<string, unknown>): Response {
  return jsonError("rate_limited", message, 429, details);
}

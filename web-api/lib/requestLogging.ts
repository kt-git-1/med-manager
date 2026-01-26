import logger from "@/lib/logger";

type Handler = () => Promise<Response>;

export async function withRequestLogging(
  request: Request,
  label: string,
  handler: Handler
): Promise<Response> {
  const start = Date.now();
  const url = new URL(request.url);
  logger.info(
    {
      label,
      method: request.method,
      path: url.pathname,
      query: url.search,
    },
    "request.start"
  );

  try {
    const response = await handler();
    logger.info(
      {
        label,
        status: response.status,
        durationMs: Date.now() - start,
      },
      "request.end"
    );
    return response;
  } catch (error) {
    logger.error(
      {
        label,
        durationMs: Date.now() - start,
        err:
          error instanceof Error
            ? { name: error.name, message: error.message, stack: error.stack }
            : { message: String(error) },
      },
      "request.error"
    );
    throw error;
  }
}

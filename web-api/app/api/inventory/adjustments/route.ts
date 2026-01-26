import { withRequestLogging } from "@/lib/requestLogging";

export async function POST(request: Request): Promise<Response> {
  return withRequestLogging(request, "POST /inventory/adjustments", async () => {
    return Response.json({ message: "Not implemented" }, { status: 501 });
  });
}

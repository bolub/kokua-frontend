import { NextRequest } from "next/server";
import { TagsService } from "../../../../server/modules/tags/impl";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const name = searchParams.get("name") || "";

  const allTags = await TagsService.find({ name });

  return Response.json({ allTags });
}

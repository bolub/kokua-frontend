import { serverBaseUrl } from "@/utils/api";
import axios from "axios";
import { load } from "cheerio";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url") as string;

  try {
    const response = await axios.get(url);
    const html = response.data;

    // Parse HTML using Cheerio
    const $ = load(html);

    // Find OG image meta tag
    const ogImageMetaTag = $('meta[property="og:image"]');

    // Extract image URL
    const ogImageUrl = ogImageMetaTag.attr("content") as string;

    // If the URL is relative, resolve it to absolute URL
    const absoluteOgImageUrl = ogImageUrl ? new URL(ogImageUrl, url).href : "";

    return Response.json({
      message: "success",
      absoluteOgImageUrl,
      headers: {
        "Access-Control-Allow-Origin":
          process.env.NODE_ENV === "production"
            ? "https://www.kokua.wiki"
            : serverBaseUrl,
        "Access-Control-Allow-Methods": "GET",
      },
    });
  } catch (error) {
    return Response.json({ error });
  }
}

import { getTagsForSiteMap } from "@/components/SearchInput/useOptions";
import { MetadataRoute } from "next";

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const tags = await getTagsForSiteMap();

  return [
    {
      url: "https://kokua.wiki",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...tags.map((tag) => ({
      url: `https://kokua.wiki?tag=${tag.name}`,
      lastModified: tag._updatedAt,
    })),
  ];
}

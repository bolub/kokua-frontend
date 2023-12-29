import { HomePage } from "@/containers/homepage/HomePage";
import { Metadata, ResolvingMetadata } from "next";

export type SearchParams = {
  query?: string;
  tag?: string;
};

type HomePageProps = {
  searchParams: SearchParams;
};

export const revalidate = 1;

export async function generateMetadata(
  {
    searchParams,
  }: {
    searchParams: SearchParams;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];

  const { query, tag } = searchParams;

  const tagTitle = decodeURIComponent(tag || "").replace("&", " | ");
  const queryTitle = decodeURIComponent(query || "");

  const title = `${queryTitle ? `${queryTitle} | ` : ""}${tagTitle}`;

  return {
    title: title || "Kokua",
    description:
      "Kokua is a place for developers to explore different resources for their daily tasks",
    openGraph: {
      images: [
        "https://res.cloudinary.com/bolub/image/upload/v1702110661/Kokua/KokuaOgImage.png",
        ...previousImages,
      ],
    },
  };
}

export default async function Home(props: HomePageProps) {
  return (
    <>
      <HomePage params={props.searchParams} />
    </>
  );
}

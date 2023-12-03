import { HomePage } from "@/containers/homepage/HomePage";

export type SearchParams = {
  query?: string;
  tag?: string;
};

type HomePageProps = {
  searchParams: SearchParams;
};

export const revalidate = 1;

export default async function Home(props: HomePageProps) {
  return (
    <>
      <HomePage params={props.searchParams} />
    </>
  );
}

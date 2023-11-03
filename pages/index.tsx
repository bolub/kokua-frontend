import { Box, chakra } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import DataSection from "../components/landing/DataSection";
import Header from "../components/landing/Header";
import SearchSection from "../components/landing/SearchSection";
import { trpc } from "../utils/trpc";
import superjson from "superjson";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "../server/_app";

export const getStaticProps: GetStaticProps = async (context) => {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {},
    transformer: superjson, // optional - adds superjson serialization
  });

  helpers.languages.all.prefetch();
  helpers.frameworks.all.prefetch();

  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
    revalidate: 1,
  };
};

const Home: NextPage = () => {
  const { data: languagesData } = trpc.languages.all.useQuery();
  const { data: frameworksData } = trpc.frameworks.all.useQuery();

  const specialResources = [
    {
      id: "1",
      name: "Special",
      logo_url:
        "https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-face_1f600.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const { data: tagsData } = trpc.tags.all.useQuery();

  return (
    <>
      <Box>
        <Header />

        <chakra.main id="main" py={"60px"}>
          <SearchSection data={tagsData} />

          <DataSection
            title=" Programming Languages"
            data={languagesData}
            type="language"
          />

          <DataSection
            title="Frameworks and Libraries"
            data={frameworksData}
            type="framework"
          />

          <DataSection
            title="Special Resources"
            data={specialResources}
            type="framework"
          />
        </chakra.main>
      </Box>
    </>
  );
};

export default Home;

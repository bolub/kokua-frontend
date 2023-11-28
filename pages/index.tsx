import { Box, chakra } from "@chakra-ui/react";
import type {
  GetStaticPathsContext,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import DataSection from "../components/landing/DataSection";
import Header from "../components/landing/Header";
import SearchSection from "../components/landing/SearchSection";
import { trpc } from "../utils/trpc";
import { FrameworkService } from "../server/modules/framework/impl";
import { LanguageService } from "../server/modules/language/impl";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPathsContext
) => {
  const frameworks = await FrameworkService.all();
  const languages = await LanguageService.all();

  return {
    props: {
      frameworks,
      languages,
    },
    revalidate: 1,
  };
};

const Home: NextPage = ({
  frameworks,
  languages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            data={languages}
            type="language"
          />

          <DataSection
            title="Frameworks and Libraries"
            data={frameworks}
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

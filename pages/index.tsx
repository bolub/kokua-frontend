import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { FrameworkService } from "../server/modules/framework/impl";
import { LanguageService } from "../server/modules/language/impl";
import { HomePage } from "../components/containers/homepage/HomePage";
import { ResourceService } from "../server/modules/resource/impl";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const frameworks = await FrameworkService.all();
  const languages = await LanguageService.all();
  const allResources = await ResourceService.all();

  console.log(context);

  return {
    props: {
      frameworks,
      languages,
      allResources,
    },
    revalidate: 1,
  };
};

const Home = ({
  frameworks,
  languages,
  allResources,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {/* <OldHomePage languages={languages} frameworks={frameworks} /> */}

      <HomePage resources={allResources} />
    </>
  );
};

export default Home;

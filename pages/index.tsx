import { Box, chakra } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import type { GetStaticProps, NextPage } from 'next';
import { getFrameworksAndLibraries, getLanguages, getTags } from '../API/home';
import DataSection from '../components/landing/DataSection';
import Header from '../components/landing/Header';
import SearchSection from '../components/landing/SearchSection';

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['languages'], getLanguages);
  await queryClient.prefetchQuery(['frameworks'], getLanguages);
  await queryClient.prefetchQuery(['tags'], getLanguages);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPage = () => {
  const { data: languagesData } = useQuery(['languages'], getLanguages);
  const { data: frameworksData } = useQuery(
    ['frameworks'],
    getFrameworksAndLibraries
  );
  const { data: tagsData } = useQuery(['tags'], getTags);

  const specialResources = [
    {
      id: 1,
      attributes: {
        name: 'Special',
        logo_url:
          'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-face_1f600.png',
        logourl: '',
      },
    },
  ];

  return (
    <>
      <Box>
        <Header />

        <chakra.main id='main' py={'60px'}>
          {/* Search section */}
          <SearchSection data={tagsData} />

          {/* Programming Languages */}
          <DataSection
            title=' Programming Languages'
            data={languagesData}
            type='language'
          />

          {/* Frameworks and Libraries */}
          <DataSection
            title='Frameworks and Libraries'
            data={frameworksData}
            type='framework'
          />

          {/* Special section */}
          <DataSection
            title='Special Resources'
            data={specialResources}
            type='framework'
          />
        </chakra.main>
      </Box>
    </>
  );
};

export default Home;

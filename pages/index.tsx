import { Box, chakra } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getFrameworksAndLibraries, getLanguages } from '../API/home';
import DataSection from '../components/landing/DataSection';
import Header from '../components/landing/Header';

const Home: NextPage = () => {
  const { data: languagesData } = useQuery(['languages'], getLanguages);
  const { data: frameworksData } = useQuery(
    ['frameworks'],
    getFrameworksAndLibraries
  );

  return (
    <>
      <Head>
        <title> Kokua </title>
        <meta
          name='description'
          content='Useful resources to help with software development'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        <Header />

        <chakra.main id='main'>
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
        </chakra.main>
      </Box>
    </>
  );
};

export default Home;

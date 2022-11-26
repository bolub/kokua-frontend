import { Box, chakra } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useState } from 'react';
import { getFrameworksAndLibraries, getLanguages, getTags } from '../API/home';
import DataSection from '../components/landing/DataSection';
import Header from '../components/landing/Header';
import SearchSection from '../components/landing/SearchSection';

const Home: NextPage = () => {
  const { data: languagesData } = useQuery(['languages'], getLanguages);
  const { data: frameworksData } = useQuery(
    ['frameworks'],
    getFrameworksAndLibraries
  );
  const { data: tagsData } = useQuery(['tags'], getTags);

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
        </chakra.main>
      </Box>
    </>
  );
};

export default Home;

import { Box, chakra } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
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

import {
  Text,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  Tabs,
  chakra,
  Container,
  Skeleton,
  Button,
  Icon,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import TabBadge from '../../components/ResourcePage/TabBadge';
import ResourceDataSection from '../../components/ResourcePage/ResourceDataSection';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getResourceList } from '../../API/resourceList';
import Seo from '../../components/Seo';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Link from 'next/link';

const Resources = () => {
  const tabStyles = {
    _selected: { color: 'white', bg: 'black.100' },
    bg: 'backgrounds.300',
    borderRadius: '4px',
    h: '40px',
    px: '10px',
    fontWeight: '700',
    minW: { base: '260px', md: 'fit-content' },
    sx: {
      div: {
        bg: 'white',
        color: 'black',
      },
    },
  };

  const { query } = useRouter();

  // Fetch query data
  const { isLoading, data } = useQuery(
    ['resourceData', query.slug],
    () => {
      return getResourceList(query?.slug as string);
    },
    {
      enabled: Boolean(query.slug),
    }
  );

  //====================== Split data into 3 parts for the 3 tabs ======================

  const UsefulPackages = useMemo(() => {
    return data?.filter((resource) => resource?.attributes?.type === 'package');
  }, [data]);

  const HowTosBlogPosts = useMemo(() => {
    return data?.filter(
      (resource) => resource?.attributes?.type === 'hotTo_or_blog_post'
    );
  }, [data]);

  const RecommendedCourses = useMemo(() => {
    return data?.filter((resource) => resource?.attributes?.type === 'course');
  }, [data]);

  // =====================================================================================

  return (
    <>
      <Seo
        title={query?.slug as string}
        description={`Useful Resources for ${query?.slug}`}
      />
      {/* Header */}
      <chakra.header background={'backgrounds.200'}>
        <Container
          display={'flex'}
          flexDir='column'
          pt='40px'
          pb='70px'
          alignItems='start'
        >
          <Link href={'/'} passHref>
            <Button
              as='a'
              variant='unstyled'
              size='xs'
              display={'flex'}
              gap='2px'
            >
              <Icon as={HiOutlineArrowLeft} />
              <Text as='span' p='10px'>
                Back to Home
              </Text>
            </Button>
          </Link>

          <Skeleton isLoaded={!isLoading} mt='29px'>
            <Text fontSize={'24px'} fontWeight={'700'}>
              {query.slug}
            </Text>
          </Skeleton>
        </Container>
      </chakra.header>

      {/* main */}
      <chakra.main>
        <chakra.section id='data'>
          <Container>
            <Tabs variant='unstyled' mb='100px'>
              <TabList mt='38px' overflowX={'auto'}>
                <Tab {...tabStyles}>
                  Useful Packages
                  <TabBadge value={UsefulPackages?.length} />
                </Tab>

                <Tab mx='30px' {...tabStyles}>
                  How Tos and Blog Posts
                  <TabBadge value={HowTosBlogPosts?.length} />
                </Tab>
                <Tab {...tabStyles}>
                  Recommended Courses
                  <TabBadge value={RecommendedCourses?.length} />
                </Tab>
              </TabList>

              <TabPanels mt='44px'>
                <TabPanel px={0}>
                  <ResourceDataSection data={UsefulPackages} type='package' />
                </TabPanel>

                <TabPanel px={0}>
                  <ResourceDataSection
                    data={HowTosBlogPosts}
                    type='hotTo_or_blog_post'
                  />
                </TabPanel>
                <TabPanel px={0}>
                  <ResourceDataSection
                    data={RecommendedCourses}
                    type='course'
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </chakra.section>
      </chakra.main>
    </>
  );
};

export default Resources;

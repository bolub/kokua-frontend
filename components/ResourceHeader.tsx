import React, { FC } from 'react';
import {
  Text,
  chakra,
  Container,
  Skeleton,
  Button,
  Icon,
  Heading,
  Box,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import TagsSection from './landing/TagsSection';
import { TagInner } from '../utils/GeneralProps';
import { ArrowSlant } from './Assets/ArrowSlant';

const testTags = [
  {
    id: 1,
    attributes: {
      name: 'Tag1',
    },
  },

  {
    id: 2,
    attributes: {
      name: 'Tag2',
    },
  },
  {
    id: 3,
    attributes: {
      name: 'Tag3',
    },
  },
] as TagInner[];

const ResourceHeader: FC<{
  isLoaded: boolean;
  title: string;
  subtitle?: string;
  href?: string;
  tags?: TagInner[];
  isPackagePage?: boolean;
}> = ({
  isLoaded,
  title = 'Dummy',
  subtitle = 'My dummy subtitle for my resource',
  href,
  tags = testTags,
  isPackagePage = false,
}) => {
  return (
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

        <Flex w='full' flexDir={{ base: 'column', md: 'row' }}>
          <Box maxW='612px'>
            {/* Header */}
            <Skeleton isLoaded={isLoaded} mt='29px'>
              <Heading
                as='h1'
                lineHeight='38px'
                fontSize={'24px'}
                fontWeight={'700'}
              >
                {title}
              </Heading>
            </Skeleton>

            {/* Subheader */}
            {isPackagePage && subtitle && (
              <Skeleton mt='6px' isLoaded={isLoaded}>
                <Text fontSize='sm' fontWeight='medium'>
                  {subtitle}
                </Text>
              </Skeleton>
            )}

            {/* Tags */}
            {isPackagePage && tags && (
              <Box mt={{ base: '30px', md: '54px' }}>
                <TagsSection data={tags} isLoaded={isLoaded} />
              </Box>
            )}
          </Box>

          {isPackagePage && (
            <Skeleton
              isLoaded={isLoaded}
              ml={{ md: 'auto' }}
              mt={{ base: '40px', md: 'auto' }}
              mb={{ md: 'auto' }}
            >
              <ChakraLink
                href={href}
                isExternal
                fontSize='sm'
                fontWeight='bold'
                display='flex'
                gap='6px'
                borderBottomWidth='1px'
                borderColor='text.100'
                w='fit-content'
                pb='10px'
              >
                Go to resource
                <Icon as={ArrowSlant} />
              </ChakraLink>
            </Skeleton>
          )}
        </Flex>
      </Container>
    </chakra.header>
  );
};

export default ResourceHeader;

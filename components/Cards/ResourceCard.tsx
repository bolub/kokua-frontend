import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { Tags } from '../../utils/GeneralProps';
import TagsSection from '../landing/TagsSection';
import useContentIcon from '../useContentIcon';
import { getLinkPreview, getPreviewFromContent } from 'link-preview-js';

interface Data {
  title: string;
  description: string;
  tags: Tags;
  contentType: string;
  url: string;
}
const ContentTypeDisplay = ({ contentType }) => {
  return (
    <Box pos='absolute' top='5' right='5'>
      {useContentIcon(contentType)}
    </Box>
  );
};

const ResourceCard: FC<Data> = ({
  title,
  description,
  tags,
  contentType,
  url,
}) => {
  const test = () => {
    getLinkPreview('https://www.youtube.com/watch?v=MejbOFk7H6c').then((data) =>
      console.log(data)
    );
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <LinkBox as='article' pos='relative'>
      <Flex
        borderRadius={'6px'}
        borderColor={'border.100'}
        borderWidth={'1px'}
        boxShadow='0px 3px 1px rgba(0, 0, 0, 0.03);'
        bg={'shadow.100'}
        py='32px'
        px='28px'
        flexDir='column'
        h='278px'
        _hover={{
          borderColor: 'brand.500',
          borderWidth: '2px',
        }}
        transition='all .3s'
      >
        <Tooltip label={contentType}>
          <ContentTypeDisplay contentType={contentType} />
        </Tooltip>

        <LinkOverlay href={url} isExternal>
          <Skeleton
            height={Boolean(title) ? '' : '20px'}
            isLoaded={Boolean(title)}
          >
            <Heading
              as='h2'
              fontSize={'16px'}
              fontWeight={'700'}
              noOfLines={2}
              lineHeight='28px'
            >
              {title}
            </Heading>
          </Skeleton>
        </LinkOverlay>

        <Skeleton
          height={Boolean(description) ? '' : '10px'}
          mt='14px'
          isLoaded={Boolean(description)}
        >
          <Text fontSize={'14px'} fontWeight={'500'} noOfLines={2}>
            {description}
          </Text>
        </Skeleton>

        <Box mt='auto'>
          <TagsSection data={tags?.data} />
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default ResourceCard;

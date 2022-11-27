import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Skeleton,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { Tags } from '../../utils/GeneralProps';

interface Data {
  title: string;
  description: string;
  tags: Tags;
}

const ResourceCard: FC<Data> = ({ title, description, tags }) => {
  return (
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
      <Skeleton height={Boolean(title) ? '' : '20px'} isLoaded={Boolean(title)}>
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

      <Skeleton
        height={Boolean(description) ? '' : '10px'}
        mt='14px'
        isLoaded={Boolean(description)}
      >
        <Text fontSize={'14px'} fontWeight={'500'} noOfLines={2}>
          {description}
        </Text>
      </Skeleton>

      <Wrap mt='auto' spacingX='12px' spacingY={'7px'}>
        {tags?.data?.map((t) => (
          <WrapItem key={t.id}>
            <Skeleton isLoaded={Boolean(t.attributes.name)}>
              <Badge
                py={'1'}
                px={'14px'}
                borderRadius={'200px'}
                color={'text.100'}
                borderColor={'border.200'}
                borderWidth={'1px'}
                fontWeight={'600'}
                textTransform={'capitalize'}
                fontSize={'12px'}
                bg='white'
              >
                {t.attributes.name}
              </Badge>
            </Skeleton>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default ResourceCard;

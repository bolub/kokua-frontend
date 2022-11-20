import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
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
      <Text mt='14px' fontSize={'14px'} fontWeight={'500'} noOfLines={2}>
        {description}
      </Text>

      <Wrap mt='auto' spacingX='12px' spacingY={'7px'}>
        {tags?.data?.map((t) => (
          <WrapItem key={t.id}>
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
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default ResourceCard;

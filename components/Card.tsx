import { Text, Link as ChakraLink, HStack, Skeleton } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface Data {
  href: string;
  title: string;
  logo: string;
  numberOfItem: number;
}

const Card: FC<Data> = ({ title, logo, numberOfItem, href }) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        borderRadius={'6px'}
        borderColor={'border.100'}
        borderWidth={'1px'}
        h={'201px'}
        shadow={'md'}
        bg={'shadow.100'}
        display={'flex'}
        flexDir='column'
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Skeleton isLoaded={Boolean(logo)}>
          <Image src={logo} alt={title} width={32} height={32} />
        </Skeleton>

        <Skeleton isLoaded={Boolean(title)}>
          <Text mt='10px' fontSize='sm' fontWeight={600}>
            {title}
          </Text>
        </Skeleton>

        <HStack mt='10px'>
          <Text as={'span'}>🪵</Text>

          <Skeleton isLoaded={Boolean(numberOfItem)}>
            <Text fontSize='sm' fontWeight={700}>
              {numberOfItem}
            </Text>
          </Skeleton>
        </HStack>
      </ChakraLink>
    </Link>
  );
};

export default Card;

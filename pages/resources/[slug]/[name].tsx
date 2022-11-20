import { Box, Text, chakra, Container } from '@chakra-ui/react';
import React from 'react';
// import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from 'next/link';

const Name = () => {
  return (
    <>
      <chakra.header background={'backgrounds.200'} h={'165px'}>
        <Container>
          <Link href='/resources/react'>
            <Box pt={'4'} pb={'8'}>
              Back to React
            </Box>
          </Link>
          <Text fontSize={'24px'} fontWeight={'700'} verticalAlign={'baseline'}>
            React
          </Text>
        </Container>
      </chakra.header>

      <chakra.main></chakra.main>
    </>
  );
};

export default Name;

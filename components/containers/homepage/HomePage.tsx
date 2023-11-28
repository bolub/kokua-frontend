import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Resource } from "@prisma/client";

export const HomePage = ({ resources }: { resources: Resource[] }) => {
  return (
    <Flex w="100%" h={{ base: "auto", md: "94vh" }}>
      <Box
        w="100%"
        maxW="300px"
        borderRightWidth="1px"
        borderColor="gray.300"
        h="100%"
        px="32px"
        py="24px"
        display={{ base: "none", md: "block" }}
      >
        <Sidebar />
      </Box>

      <Box overflowY="auto" w="100%" pt="24px" pb="64px">
        <Container maxW="1150px">
          <Content resources={resources} />
        </Container>
      </Box>
    </Flex>
  );
};

import { Box, Container, Flex } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import ResourceDataSection from "./components/ResourceDataSection";
import { SearchParams } from "@/app/page";
import { Suspense } from "react";
import { ResourcesLoading } from "./components/LoadingSkeleton";

export const HomePage = async ({ params }: { params: SearchParams }) => {
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
          <Suspense fallback={<>search</>}>
            <SearchInput />
          </Suspense>

          <Suspense fallback={<ResourcesLoading />}>
            <ResourceDataSection params={params} />
          </Suspense>
        </Container>
      </Box>
    </Flex>
  );
};

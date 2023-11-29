import { Box, Container, Flex } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import ResourceDataSection from "./components/ResourceDataSection";
import { SearchParams } from "@/app/page";
import { Suspense } from "react";
import { ResourcesLoading } from "./components/LoadingSkeleton";
import { SidebarMobileContainer } from "./components/Sidebar/SidebarMobileContainer";

export const HomePage = async ({ params }: { params: SearchParams }) => {
  return (
    <Flex
      w="100%"
      h={{ base: "auto", md: "100vh" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        w="100%"
        maxW={{ lg: "300px" }}
        borderRightWidth={{ lg: "1px" }}
        borderColor="gray.300"
        h="100%"
        px={{ lg: "32px" }}
        py={{ lg: "24px" }}
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Sidebar params={params} />
        </Box>

        <Box display={{ lg: "none" }}>
          <SidebarMobileContainer>
            <Sidebar params={params} />
          </SidebarMobileContainer>
        </Box>
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

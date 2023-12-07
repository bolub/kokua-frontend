import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Sidebar } from "@/containers/homepage/components/Sidebar/Sidebar";
import { SidebarMobileContainer } from "@/containers/homepage/components/Sidebar/SidebarMobileContainer";

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="100%"
      h={{ base: "auto", md: "100dvh" }}
      flexDir={{ base: "column", lg: "row" }}
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
        <Box display={{ base: "none", lg: "block" }} h="100%">
          <Sidebar />
        </Box>

        <Box display={{ lg: "none" }} h="100%">
          <SidebarMobileContainer>
            <Sidebar />
          </SidebarMobileContainer>
        </Box>
      </Box>

      <Box overflowY="auto" w="100%" pt="24px" pb="64px">
        <Container maxW="1150px">{children}</Container>
      </Box>
    </Flex>
  );
};

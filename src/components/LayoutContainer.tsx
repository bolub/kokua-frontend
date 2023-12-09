"use client";

import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Sidebar } from "@/containers/homepage/components/Sidebar/Sidebar";
import { SidebarMobileContainer } from "@/containers/homepage/components/Sidebar/SidebarMobileContainer";
import { Framework, Language } from "./DataLayer";

export const LayoutContainer = ({
  children,
  frameworks,
  languages,
}: {
  children: ReactNode;
  frameworks: Framework[];
  languages: Language[];
}) => {
  const mobileDisclosure = useDisclosure();

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
          <Sidebar
            frameworks={frameworks}
            languages={languages}
            onClickItem={mobileDisclosure.onClose}
          />
        </Box>

        <Box display={{ lg: "none" }} h="100%">
          <SidebarMobileContainer disclosure={mobileDisclosure}>
            <Sidebar
              frameworks={frameworks}
              languages={languages}
              onClickItem={mobileDisclosure.onClose}
            />
          </SidebarMobileContainer>
        </Box>
      </Box>

      <Box overflowY="auto" w="100%" pt="24px" pb="64px">
        <Container px={{ base: "24px", sm: "52px" }} maxW="1150px">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

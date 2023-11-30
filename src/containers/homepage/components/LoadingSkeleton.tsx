import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { ContentContainer } from "./resource-card/ResourceCard";

export const LoadingSkeleton = () => {
  return (
    <Flex
      borderRadius={"2xl"}
      borderColor={"gray.300"}
      borderWidth={"1px"}
      pt="30px"
      pb="20px"
      flexDir="column"
      _hover={{
        borderColor: "brand.500",
      }}
      transition="all .3s"
      h="full"
    >
      <ContentContainer>
        <SkeletonCircle size="6" mb="20px" />
        <SkeletonText spacing="4" noOfLines={1} skeletonHeight="4" />

        <SkeletonText
          mt="30px"
          mb="32px"
          noOfLines={2}
          spacing="4"
          skeletonHeight="2"
        />
      </ContentContainer>

      <Box mt="auto" px="14px">
        <Skeleton height="200px" rounded="xl" />
      </Box>

      <ContentContainer mt="20px">
        <Wrap spacingX="12px" spacingY={"7px"}>
          {[1, 2, 3, 4, 5, 6]?.map((t, index) => {
            return (
              <WrapItem key={index}>
                <Skeleton rounded="full" height="20px" width="80px" />
              </WrapItem>
            );
          })}
        </Wrap>
      </ContentContainer>
    </Flex>
  );
};

export const ResourcesLoading = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="24px">
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
    </SimpleGrid>
  );
};

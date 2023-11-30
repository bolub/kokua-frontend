"use client";

import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  Tooltip,
  BoxProps,
} from "@chakra-ui/react";
import TagsSection from "../TagsSection";
import { ResourceWithTags } from "../../../../../server/modules/resource/interface";
import { ContentTypeDisplay } from "./ContentTypeDisplay";
import { ReactNode } from "react";
import { ImageDisplay } from "./ImageDisplay";

export const ContentContainer = ({
  children,
  ...props
}: { children: ReactNode } & BoxProps) => {
  return (
    <Box px="28px" {...props}>
      {children}
    </Box>
  );
};

const ResourceCard = ({
  name,
  subtitle,
  tags,
  contentType,
  external_url,
}: ResourceWithTags) => {
  return (
    <LinkBox as="article" pos="relative">
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
        <ContentContainer px="24px" mb="20px">
          <Tooltip label={contentType}>
            <ContentTypeDisplay contentType={contentType} />
          </Tooltip>
        </ContentContainer>

        <LinkOverlay href={external_url} isExternal>
          <ContentContainer>
            <Heading
              as="h2"
              fontSize={"18px"}
              fontWeight={"bold"}
              noOfLines={2}
              lineHeight="28px"
            >
              {name}
            </Heading>
          </ContentContainer>
        </LinkOverlay>

        <ContentContainer mt="14px" mb="32px">
          <Text fontSize="sm" fontWeight={"500"} noOfLines={2}>
            {subtitle}
          </Text>
        </ContentContainer>

        <Box mt="auto" px="14px">
          <ImageDisplay url={external_url} alt={name} />
        </Box>

        <ContentContainer mt="20px">
          <TagsSection data={tags} />
        </ContentContainer>
      </Flex>
    </LinkBox>
  );
};

export default ResourceCard;

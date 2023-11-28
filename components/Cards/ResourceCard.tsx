import {
  Box,
  Flex,
  Heading,
  Image as ChakraImage,
  LinkBox,
  LinkOverlay,
  Skeleton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import TagsSection from "../landing/TagsSection";
import useContentIcon from "../useContentIcon";
import { getLinkPreview } from "link-preview-js";
import { ContentType, Tag } from "@prisma/client";

interface Data {
  title: string;
  description: string;
  tags: Tag[];
  contentType?: ContentType | null;
  url: string;
}
const ContentTypeDisplay = ({
  contentType,
}: {
  contentType?: ContentType | null;
}) => {
  return (
    <Box pos="absolute" top="5" right="5">
      {useContentIcon(contentType)}
    </Box>
  );
};

const ResourceCard: FC<Data> = ({
  title,
  description,
  tags,
  contentType,
  url,
}) => {
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const getPreviewData = async () => {
      try {
        const data = await getLinkPreview(url);
        setPreviewImage(
          // @ts-ignore
          (data?.images && data?.images[0]) || "/Placeholder.png"
        );
      } catch (error) {}
    };

    getPreviewData();
  }, [url]);

  return (
    <LinkBox as="article" pos="relative">
      <Flex
        borderRadius={"2xl"}
        borderColor={"gray.300"}
        borderWidth={"1px"}
        boxShadow="0px 3px 1px rgba(0, 0, 0, 0.03);"
        bg={"shadow.100"}
        py="40px"
        px="32px"
        flexDir="column"
        _hover={{
          borderColor: "brand.500",
          borderWidth: "2px",
        }}
        transition="all .3s"
        h="full"
      >
        <Tooltip label={contentType}>
          <ContentTypeDisplay contentType={contentType} />
        </Tooltip>

        <LinkOverlay href={url} isExternal>
          <Skeleton
            height={Boolean(title) ? "" : "20px"}
            isLoaded={Boolean(title)}
          >
            <Heading
              as="h2"
              fontSize={"24px"}
              fontWeight={"700"}
              noOfLines={2}
              lineHeight="28px"
            >
              {title}
            </Heading>
          </Skeleton>
        </LinkOverlay>

        <Skeleton
          height={Boolean(description) ? "" : "10px"}
          mt="14px"
          isLoaded={Boolean(description)}
        >
          <Text fontWeight={"500"} noOfLines={2}>
            {description}
          </Text>

          <ChakraImage
            src={previewImage}
            w="full"
            h="300px"
            objectFit="cover"
            alt={title}
            rounded="xl"
            my="20px"
            onError={(e) => {
              e.currentTarget.src = "/Placeholder.png";
            }}
          />
        </Skeleton>

        <Box mt="auto">
          <TagsSection data={tags} />
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default ResourceCard;

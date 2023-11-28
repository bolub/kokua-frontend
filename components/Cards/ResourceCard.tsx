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
  return <Box>{useContentIcon(contentType)}</Box>;
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
        pt="30px"
        pb="20px"
        flexDir="column"
        _hover={{
          borderColor: "brand.500",
        }}
        transition="all .3s"
        h="full"
      >
        <Box px="24px" mb="20px">
          <Tooltip label={contentType}>
            <ContentTypeDisplay contentType={contentType} />
          </Tooltip>
        </Box>

        <LinkOverlay px="24px" href={url} isExternal>
          <Skeleton
            height={Boolean(title) ? "" : "20px"}
            isLoaded={Boolean(title)}
          >
            <Heading
              as="h2"
              fontSize={"20px"}
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
          px="24px"
        >
          <Text fontSize="sm" fontWeight={"500"} noOfLines={2}>
            {description}
          </Text>
        </Skeleton>

        <Box mt="auto" px="14px">
          <ChakraImage
            src={previewImage || "/Placeholder.png"}
            w="full"
            h="200px"
            objectFit="cover"
            alt={title}
            rounded="xl"
            my="20px"
            onError={(e) => {
              e.currentTarget.src = "/Placeholder.png";
            }}
          />
        </Box>

        <Box px="24px">
          <TagsSection data={tags} />
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default ResourceCard;

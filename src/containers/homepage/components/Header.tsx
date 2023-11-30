"use client";

import { SearchParams } from "@/app/page";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

export const Header = ({
  query,
  tag,
  length,
}: { length: number } & SearchParams) => {
  const { removeQueryParam } = useQueryParamsActions();

  if (query) {
    return (
      <Text as="h1" mb="20px" fontWeight="bold">
        Showing {length} result(s) for{" "}
        <Text as="span" color="brand.500">
          &apos;{query}&apos;
        </Text>
      </Text>
    );
  }

  if (tag) {
    return (
      <Text as="h1" mb="20px" fontWeight="bold">
        Showing {length} result(s) for{" "}
        <Tag ml="3px">
          <TagLabel>{tag}</TagLabel>
          <TagCloseButton
            onClick={() => {
              removeQueryParam("tag");
            }}
          />
        </Tag>
      </Text>
    );
  }

  return (
    <Text as="h1" mb="20px" fontWeight="bold">
      Showing all resources ({length})
    </Text>
  );
};

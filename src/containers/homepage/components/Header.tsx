"use client";

import { SearchParams } from "@/app/(website)/page";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { HStack, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

export const Header = ({ tag, length }: { length: number } & SearchParams) => {
  const { removeQueryParam } = useQueryParamsActions();

  if (tag) {
    return (
      <HStack mb="20px">
        <Text as="h1" fontWeight="bold">
          Showing {length} result(s) for{" "}
        </Text>

        {tag && (
          <Tag>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton
              onClick={() => {
                removeQueryParam("tag");
              }}
            />
          </Tag>
        )}
      </HStack>
    );
  }

  return (
    <Text as="h1" mb="20px" fontWeight="bold">
      Showing all resources ({length})
    </Text>
  );
};

"use client";

import { SearchParams } from "@/app/page";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { HStack, Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

export const Header = ({
  query,
  tag,
  length,
}: { length: number } & SearchParams) => {
  const { removeQueryParam } = useQueryParamsActions();

  if (query || tag) {
    return (
      <HStack mb="20px">
        <Text as="h1" fontWeight="bold">
          Showing {length} result(s) for{" "}
        </Text>

        <HStack>
          {query && (
            <Tag>
              <TagLabel>{query}</TagLabel>
              <TagCloseButton
                onClick={() => {
                  removeQueryParam("query");
                }}
              />
            </Tag>
          )}

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
      </HStack>
    );
  }

  // if (tag) {
  //   return (
  //     <Text as="h1" mb="20px" fontWeight="bold">
  //       Showing {length} result(s) for{" "}
  //       <Tag ml="3px">
  //         <TagLabel>{tag}</TagLabel>
  //         <TagCloseButton
  //           onClick={() => {
  //             removeQueryParam("tag");
  //           }}
  //         />
  //       </Tag>
  //     </Text>
  //   );
  // }

  return (
    <Text as="h1" mb="20px" fontWeight="bold">
      Showing all resources ({length})
    </Text>
  );
};

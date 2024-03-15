"use client";

import { Tag as ChakraTag, Wrap, WrapItem } from "@chakra-ui/react";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { queryIds } from "@/components/SearchInput/useQueryParams";
import { Tag } from "./resource-data-section/types";

const TagsSection: FC<{
  data?: Tag[];
}> = ({ data }) => {
  const searchParams = useSearchParams();
  const search = new URLSearchParams(searchParams);
  const router = useRouter();

  return (
    <Wrap spacingX="12px" spacingY={"7px"}>
      {data?.map((t) => {
        return (
          <WrapItem key={t._id}>
            <ChakraTag
              onClick={(e) => {
                e.preventDefault();

                search.set(queryIds.tag, t.name);
                router.push(`/?${search.toString()}`);
              }}
            >
              {t.name}
            </ChakraTag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default TagsSection;

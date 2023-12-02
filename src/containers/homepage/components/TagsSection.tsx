"use client";

import { Tag as ChakraTag, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { useSearchParams } from "next/navigation";
import { queryIds } from "@/components/SearchInput/useQueryParams";
import { Tag } from "./ResourceDataSection";

const TagsSection: FC<{
  data?: Tag[];
}> = ({ data }) => {
  const searchParams = useSearchParams();
  const search = new URLSearchParams(searchParams);

  return (
    <Wrap spacingX="12px" spacingY={"7px"}>
      {data?.map((t) => {
        search.set(queryIds.tag, t.name);

        return (
          <WrapItem key={t._id}>
            <ChakraTag as={Link} href={`/?${search.toString()}`}>
              {t.name}
            </ChakraTag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default TagsSection;

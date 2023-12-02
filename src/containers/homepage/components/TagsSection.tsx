"use client";

import { Tag as ChakraTag, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { Tag } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { queryIds } from "@/components/SearchInput/useQueryParams";

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
          <WrapItem key={t.id}>
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

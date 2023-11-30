import {
  Badge,
  BadgeProps,
  Tag as ChakraTag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { Tag } from "@prisma/client";

const TagsSection: FC<{
  data?: Tag[];
}> = ({ data }) => {
  return (
    <Wrap spacingX="12px" spacingY={"7px"}>
      {data?.map((t) => {
        return (
          <WrapItem key={t.id}>
            <ChakraTag as={Link} href={`/?tag=${t.name}`}>
              {t.name}
            </ChakraTag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default TagsSection;

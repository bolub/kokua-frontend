import { Text, Link as ChakraLink, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Data {
  href: string;
  title: string;
  logo: string;
}

const Card: FC<Data> = ({ title, logo, href }) => {
  return (
    <ChakraLink
      as={Link}
      href={href}
      rounded="2xl"
      borderColor={"gray.300"}
      borderWidth={"1px"}
      h={"201px"}
      bgColor={"shadow.100"}
      display={"flex"}
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
      _hover={{
        borderColor: "brand.500",
        borderWidth: "2px",
      }}
      transition="all .3s"
    >
      <Skeleton isLoaded={Boolean(logo)}>
        <Image src={logo} alt={title} width={32} height={32} />
      </Skeleton>

      <Skeleton
        isLoaded={Boolean(title)}
        height={!Boolean(title) ? "10px" : ""}
        width={!Boolean(title) ? "60px" : ""}
        mt="10px"
      >
        <Text fontWeight={600}>{title}</Text>
      </Skeleton>
    </ChakraLink>
  );
};

export default Card;

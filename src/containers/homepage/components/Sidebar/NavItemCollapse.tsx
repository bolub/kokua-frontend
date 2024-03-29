"use client";

import { useQueryParams } from "@/components/SearchInput/useQueryParams";
import {
  Text,
  VStack,
  useDisclosure,
  chakra,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

export const NavItemCollapse = ({
  label,
  options,
  onClickItem,
}: {
  label: string;
  options: { id: string; label: string; href: string }[];
  onClickItem: () => void;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  const { tag } = useQueryParams();

  const isChildActive = options.some((option) => {
    return option.href === `?tag=${tag}` || isOpen;
  });

  return (
    <>
      <chakra.button
        onClick={onToggle}
        fontWeight={!isChildActive ? "" : "bold"}
        w="100%"
        textAlign="left"
        display="flex"
        gap="6px"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {label}

        {!isOpen ? (
          <Icon as={HiOutlineChevronDown} />
        ) : (
          <Icon as={HiOutlineChevronUp} />
        )}
      </chakra.button>

      <Collapse in={isOpen} animateOpacity>
        <VStack px="10px" pb="10px" align="start" spacing="10px">
          {options.map((option, index) => {
            const isActive = option.href === `?tag=${tag}`;

            return (
              <Text
                key={index}
                as={Link}
                href={option.href}
                fontWeight={!isActive ? "" : "bold"}
                onClick={onClickItem}
              >
                {option.label}
              </Text>
            );
          })}
        </VStack>
      </Collapse>
    </>
  );
};

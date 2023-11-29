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
}: {
  label: string;
  options: { id: string; label: string; href: string }[];
}) => {
  const { isOpen, onToggle } = useDisclosure();

  const { tag } = useQueryParams();

  const isChildActive =
    options.some((option) => option.href.includes(tag)) || isOpen;

  return (
    <>
      <chakra.button
        onClick={onToggle}
        fontWeight={!isChildActive ? "medium" : "bold"}
        w="100%"
        textAlign="left"
        display="flex"
        gap="6px"
        alignItems={"center"}
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
            const isActive = option.href.includes(tag);

            return (
              <Text
                key={index}
                as={Link}
                href={option.href}
                fontWeight={!isActive ? "" : "bold"}
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

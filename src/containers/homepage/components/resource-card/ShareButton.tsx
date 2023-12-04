import { IconButton } from "@chakra-ui/react";
import React from "react";
import { HiOutlineShare } from "react-icons/hi";

export const ShareButton = () => {
  return (
    <IconButton
      icon={<HiOutlineShare />}
      aria-label="share"
      variant="ghost"
      colorScheme="gray"
      rounded="xl"
    />
  );
};

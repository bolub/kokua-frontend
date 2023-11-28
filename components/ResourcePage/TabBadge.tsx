import { Center } from "@chakra-ui/react";
import React from "react";

const TabBadge = ({ value }: { value: number }) => {
  return (
    <Center
      bg="#4A5568"
      color="white"
      ml="10px"
      rounded="full"
      fontWeight={700}
      fontSize="sm"
      className="badge"
      minW="20px"
      px="10px"
      py="4px"
    >
      {value}
    </Center>
  );
};

export default TabBadge;

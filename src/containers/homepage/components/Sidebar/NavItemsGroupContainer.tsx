import { Box, Text, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const NavItemsGroupContainer = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Box mt="54px">
      <Text
        as="span"
        fontWeight={"extrabold"}
        fontSize={"xs"}
        textTransform={"uppercase"}
        color="gray.600"
      >
        {label}
      </Text>

      <VStack
        align="start"
        fontSize={"sm"}
        fontWeight={"medium"}
        mt="16px"
        spacing={3}
      >
        {children}
      </VStack>
    </Box>
  );
};

"use client";

import { CustomModal } from "../../../../../components/CustomModal";
import { HStack, Text, useDisclosure, chakra, Icon } from "@chakra-ui/react";
import { SuggestResourceForm } from "./SuggestResourceForm";
import { BulbIcon } from "../../resource-card/SuggestedIndicator";

export const SuggestResource = () => {
  const disclosure = useDisclosure();

  return (
    <>
      <chakra.button w="full" onClick={disclosure.onOpen}>
        <HStack gap="12px">
          <Icon
            fontSize="16px"
            color="yellow.500"
            strokeWidth="2px"
            as={BulbIcon}
          />

          <Text>Suggest resource</Text>
        </HStack>
      </chakra.button>

      <CustomModal disclosure={disclosure} title="Suggest Resource">
        <>
          <Text fontSize="sm">
            If you found an interesting resource that you&apos;d like to share,
            enter the url, your name and email so we can consider adding it...
          </Text>

          <SuggestResourceForm onFinish={disclosure.onClose} />
        </>
      </CustomModal>
    </>
  );
};

"use client";

import { CustomModal } from "../../../../../components/CustomModal";
import { HStack, Text, useDisclosure, chakra } from "@chakra-ui/react";
import { SuggestResourceForm } from "./SuggestResourceForm";

export const SuggestResource = () => {
  const disclosure = useDisclosure();

  return (
    <>
      <chakra.button w="full" onClick={disclosure.onOpen}>
        <HStack gap="12px">
          <Text>🪵</Text>
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

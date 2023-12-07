"use client";

import { CustomModal } from "../../../../../components/CustomModal";
import { HStack, Text, useDisclosure, chakra } from "@chakra-ui/react";
import { FeedbackForm } from "./FeedbackForm";

export const Feedback = () => {
  const disclosure = useDisclosure();

  return (
    <>
      <chakra.button w="full" onClick={disclosure.onOpen}>
        <HStack gap="12px">
          <Text>💬</Text>
          <Text>Feedback</Text>
        </HStack>
      </chakra.button>

      <CustomModal disclosure={disclosure} title="Feedback">
        <>
          <Text fontSize="sm">
            See something that needs improvement, or just general feedback? Just
            holla.
          </Text>

          <FeedbackForm onFinish={disclosure.onClose} />
        </>
      </CustomModal>
    </>
  );
};

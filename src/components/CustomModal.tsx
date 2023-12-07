"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  chakra,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export const CustomModal = ({
  title,
  children,
  disclosure,
}: {
  title: string;
  children: ReactNode;
  disclosure: UseDisclosureReturn;
}) => {
  const { isOpen, onClose } = disclosure;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent rounded="2xl" pb="16px">
          <ModalHeader fontSize="lg" fontWeight={700} mt="12px">
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

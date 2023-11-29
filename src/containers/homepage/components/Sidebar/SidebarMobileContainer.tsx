"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode, useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";

export const SidebarMobileContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Navbar>
        <IconButton
          mr="20px"
          icon={<HiOutlineMenu />}
          aria-label="Menu"
          onClick={onOpen}
          ref={btnRef}
        />
      </Navbar>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt="40px">{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

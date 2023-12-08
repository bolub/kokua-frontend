"use client";

import { Navbar } from "@/components/Navbar";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import React, { ReactNode, useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";

export const SidebarMobileContainer = ({
  children,
  disclosure,
}: {
  children: ReactNode;
  disclosure: UseDisclosureReturn;
}) => {
  const { isOpen, onOpen, onClose } = disclosure;
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
          bgColor="brand.500"
          color="white"
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

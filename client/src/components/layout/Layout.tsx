"use client";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import MobileNav from "../MobileNav";
import SidebarContent from "./SidebarContent";

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("dark.100", "dark.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />

      {/** Content **/ }
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Box p={4} >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

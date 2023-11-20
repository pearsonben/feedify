"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.200", "gray.800")}>
      <Navbar />
      <Box pt={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <Box minH="100vh" bg={useColorModeValue("dark.100", "dark.900")}>
      <Navbar />

      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

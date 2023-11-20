"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import NavbarSearch from "./NavbarSearch";

import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import { useNavbarStore } from "../../../stores/navbarStore";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { tabs, activeTab, setActiveTab } = useNavbarStore((state) => ({
    tabs: state.tabs,
    activeTab: state.activeTab,
    setActiveTab: state.setActiveTab,
  }));

  return (
    <>
      <Box
        w={"100%"}
        zIndex={10000}
        position={"fixed"}
        bg={useColorModeValue("primary.500", "primary.500")}
        px={4}
      >
        <Flex
          gap={4}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          h={16}
        >
          <HStack flex={1} spacing={8} alignItems={"center"}>
            <NavbarLogo />
          </HStack>

          <HStack
            maxW={"2xl"}
            alignContent={"center"}
            justifyContent={"center"}
            display={{ base: "none", md: "flex" }}
          >
            {tabs.map((tab) => (
              <NavbarLink key={tab.path} setActiveTab={setActiveTab} tab={tab} isActive={activeTab.path === tab.path} />
            ))}
          </HStack>

          <Flex flex={1} gap={2} justifyContent={"end"} alignItems={"center"}>
            <Box display={{ base: "none", lg: "flex" }}>
              <NavbarSearch />
            </Box>
            <Box display={{ lg: "none" }}>
              <IconButton
                size="lg"
                variant="ghost"
                aria-label="Search"
                _hover={{
                  bg: "primary.300",
                }}
                color={"dark.50"}
                icon={<SearchIcon />}
              />
            </Box>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="toggle light mode"
              _hover={{
                bg: "primary.300",
              }}
              onClick={toggleColorMode}
              color={"dark.50"}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

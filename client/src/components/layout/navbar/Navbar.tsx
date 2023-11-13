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
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import NavbarSearch from "./NavbarSearch";
import MobileNavbar from "./MobileNavbar";
import { FiCompass, FiHome, FiStar, FiTrendingUp } from "react-icons/fi";
import { IconType } from "react-icons";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
  isActive?: boolean;
}
const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome, path: "/", isActive: true },
  { name: "Trending", icon: FiTrendingUp, path: "trending" },
  { name: "Explore", icon: FiCompass, path: "/explore" },
  { name: "Favourites", icon: FiStar, path: "favourites" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        w={"100%"}
        zIndex={10000}
        position={"fixed"}
        bg={useColorModeValue("primary.500", "primary.500")}
        px={4}
      >
        <Flex gap={4} w={"100%"} justifyContent={"space-between"} alignItems={"center"} h={16}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  flex={1} spacing={8} alignItems={"center"}>
            <NavbarLogo />
          </HStack>
          
          <HStack maxW={"2xl"} alignContent={"center"}  justifyContent={"center"} display={{ base: "none", md: "flex" }}>
            {LinkItems.map((link) => (
                <NavbarLink icon={link.icon} path={link.path} name={link.name} isActive={link.isActive} />
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

        {isOpen ? <MobileNavbar closeNav={onClose} links={LinkItems} /> : null}
      </Box>
    </>
  );
}

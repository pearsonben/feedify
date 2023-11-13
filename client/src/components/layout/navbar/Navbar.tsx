"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Icon,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";
import NavbarSearch from "./NavbarSearch";
import MobileNavbar from "./MobileNavbar";
import { FiCompass, FiHome, FiStar, FiTrendingUp } from "react-icons/fi";
import { IconType } from "react-icons";

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
        <Flex gap={4} alignItems={"center"} h={16}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to={"/"}>
                <HStack>
                  <Icon
                    color={useColorModeValue("primary.300", "primary.300")}
                    as={BsBookmarkFill}
                  ></Icon>

                  <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                    color={"dark.50"}
                  >
                    Bookify
                  </Text>
                </HStack>
              </Link>
            </Box>
          </HStack>
          <Spacer />
          <HStack border={"2px solid red"} display={{ base: "none", md: "flex" }}>
            {LinkItems.map((link) => (
              <Link to={link.path}>
                <Box borderBottomWidth={link.isActive ? "3px": "none"} borderBottomColor={"dark.50"} >
                  <IconButton
                    px={8}
                    size="lg"
                    variant="ghost"
                    aria-label="Search"
                    _hover={{
                      bg: "primary.300",
                    }}
                    color={"dark.50"}
                    icon={
                      <Icon
                        size={"lg"}
                        _groupHover={{
                          color: "white",
                        }}
                        as={link.icon}
                      />
                    }
                  />
                </Box>
              </Link>
            ))}
          </HStack>
          <Spacer />
          <Flex gap={2} alignItems={"center"}>
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

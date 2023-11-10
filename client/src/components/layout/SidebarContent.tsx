import { Text, Box, CloseButton, Flex, HStack, Icon, useColorModeValue, BoxProps } from "@chakra-ui/react";
import { BsBookmarkFill } from "react-icons/bs";
import NavItem from "./NavItem";
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from "react-icons/fi";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }

  interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
  }
  
  
  const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, path: "/" },
    { name: "Trending", icon: FiTrendingUp, path: "trending" },
    { name: "Explore", icon: FiCompass, path: "/explore" },
    { name: "Favourites", icon: FiStar, path: "favourites" },
    { name: "Settings", icon: FiSettings, path: "settings" },
  ];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        transition="1s ease"
        bg={"primary.400"}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent={{ base: "space-between", md: "center" }}
        >
          <Link to={"/"}>
            <HStack spacing={{ base: "1" }}>
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
  
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };


  export default SidebarContent
import {
  Text,
  FlexProps,
  Box,
  Flex,
  useColorModeValue,
  IconButton,
  HStack,
  Icon,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorMode,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { BsBookmarkFill } from "react-icons/bs";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navIconColour = "primary.300";

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("dark.100", "dark.900")}
      justifyContent={{ base: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <InputGroup  w={"md"} display={{ base: "none", md: "inline-block" }}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="primary.300" />
        </InputLeftElement>
        <Input focusBorderColor='primary.300' bg={useColorModeValue("dark.50", "dark.800")} type="tel" placeholder="Search..." _placeholder={{ opacity: 0.7, color: 'primary.300' }} />
      </InputGroup>

      <Link to={"/"}>
        <HStack
          display={{ base: "flex", md: "none" }}
          spacing={{ base: "1", md: "6" }}
        >
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

      <HStack spacing={{ base: "0", md: "4" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="toggle light mode"
          onClick={toggleColorMode}
          color={navIconColour}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          color={navIconColour}
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">BOON</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;

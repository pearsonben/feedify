import { Box, Flex, Icon, Stack } from "@chakra-ui/react";
import NavbarSearch from "./NavbarSearch";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

interface MobileNavbarProps {
  links: LinkItemProps[],
  closeNav: () => void,
}

function MobileNavbar({ links, closeNav }: MobileNavbarProps) {
  return (
    <Box pb={4} display={{ md: "none" }}>
      <Stack as={"nav"} spacing={4}>
        <NavbarSearch />

        {links.map((link) => (
          <Link to={link.path}>
            <Box
              as="a"
              href="#"
              style={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
              onClick={closeNav}
            >
              <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                fontWeight={"semibold"}
                _hover={{
                  bg: "primary.300",
                  color: "dark.50",
                }}
                color={"dark.50"}
              >
                <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "white",
                  }}
                  as={link.icon}
                />
                {link.name}
              </Flex>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default MobileNavbar;

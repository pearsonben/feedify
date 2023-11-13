import { Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface MobileNavbarLinkProps {
  path: string;
  icon: IconType;
  name: string;
  closeNav: () => void,
}

function MobileNavbarLink({closeNav, path, name, icon}: MobileNavbarLinkProps) {
  return (
    <Link to={path}>
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
            as={icon}
          />
          {name}
        </Flex>
      </Box>
    </Link>
  );
}

export default MobileNavbarLink;

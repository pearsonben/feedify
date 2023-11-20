import { Box, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Tab } from "../../../models/ui/tab";

interface MobileNavbarLinkProps {
  tab: Tab
  closeNav: () => void,
}

function MobileNavbarLink({closeNav, tab}: MobileNavbarLinkProps) {
  return (
    <Link to={tab.path}>
      <Box
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
            as={tab.icon}
          />
          {tab.name}
        </Flex>
      </Box>
    </Link>
  );
}

export default MobileNavbarLink;

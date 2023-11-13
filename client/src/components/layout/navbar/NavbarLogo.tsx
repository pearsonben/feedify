import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavbarLogo() {
  return (
    <Box>
      <Link to={"/"}>
        <HStack>
          <Icon
            color={"yellow.900"}
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
  );
}

export default NavbarLogo;

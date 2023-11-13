import { IconButton, Icon, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
  path: string;
  icon: IconType;
  name: string;
  isActive?: boolean;
}

function NavbarLink({path, icon, isActive}: NavbarLinkProps) {
  return (
    <Link to={path}>
      <Box
        borderBottomWidth={isActive ? "3px" : "none"}
        borderBottomColor={"dark.50"}
      >
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
              as={icon}
            />
          }
        />
      </Box>
    </Link>
  );
}

export default NavbarLink;

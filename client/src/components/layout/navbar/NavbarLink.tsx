/* eslint-disable no-debugger */
import { IconButton, Icon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Tab } from "../../../models/ui/tab";

interface NavbarLinkProps {
  tab: Tab,
  setActiveTab: (tab: Tab) => void
  isActive?: boolean
}

function NavbarLink({tab, setActiveTab, isActive}: NavbarLinkProps) {

  return (
    <Link to={tab.path} onClick={() => setActiveTab(tab)}>
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
              size="lg"
              _groupHover={{
                color: "white",
              }}
              as={tab.icon}
            />
          }
        />
      </Box>
    </Link>
  );
}

export default NavbarLink;

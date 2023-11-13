import { Box, Stack } from "@chakra-ui/react";
import NavbarSearch from "./NavbarSearch";
import { IconType } from "react-icons";
import MobileNavbarLink from "./MobileNavbarLink";

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
          <MobileNavbarLink closeNav={closeNav} icon={link.icon} name={link.name} path={link.path} />
        ))}
      </Stack>
    </Box>
  );
}

export default MobileNavbar;

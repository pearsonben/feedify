import { Box, Stack } from "@chakra-ui/react";
import NavbarSearch from "./NavbarSearch";
import MobileNavbarLink from "./MobileNavbarLink";
import { Tab } from "../../../models/ui/tab";


interface MobileNavbarProps {
  tabs: Tab[]
  closeNav: () => void,
}

function MobileNavbar({ tabs, closeNav }: MobileNavbarProps) {
  return (
    <Box pb={4} display={{ md: "none" }}>
      <Stack as={"nav"} spacing={4}>
        <NavbarSearch />

        {tabs.map((tab) => (
          <MobileNavbarLink key={tab.path} closeNav={closeNav} tab={tab} />
        ))}
      </Stack>
    </Box>
  );
}

export default MobileNavbar;

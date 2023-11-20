import { Box, HStack } from "@chakra-ui/react";
import { useNavbarStore } from "../../../stores/navbarStore";
import NavbarLink from "./NavbarLink";

function BottomNavbar() {
  const { tabs, activeTab, setActiveTab } = useNavbarStore((state) => ({
    tabs: state.tabs,
    activeTab: state.activeTab,
    setActiveTab: state.setActiveTab,
  }));

  return (
    <Box
      display={{ base: "flex", md: "none" }}
      bg={"primary.400"}
      position={"fixed"}
      bottom={0}
      left={0}
      w={"100%"}
    >
      <HStack w={"100%"} justifyContent={"stretch"} gap={0}>
        {tabs.map((tab) => (
          <Box flexGrow={1}>
            <NavbarLink
              key={tab.path}
              setActiveTab={setActiveTab}
              tab={tab}
              isActive={activeTab.path === tab.path}
            />
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export default BottomNavbar;

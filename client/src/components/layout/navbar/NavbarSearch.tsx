import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function NavbarSearch() {
  return (
    <InputGroup w={{base:"100%", md: "3xs"}} display={{ md: "inline-block" }}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="dark.50" />
      </InputLeftElement>
      <Input
        focusBorderColor="dark.50"
        bg={"primary.400"}
        type="tel"
        border={"none"}
        placeholder="Search..."
        _placeholder={{ opacity: 0.7, color: "dark.50" }}
      />
    </InputGroup>
  );
}

export default NavbarSearch;

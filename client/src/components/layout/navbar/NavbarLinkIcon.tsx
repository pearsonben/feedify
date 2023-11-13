/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";
import { Link } from "react-router-dom";

interface NavbarLinkIconProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  link: string;
  tooltip?: string;
}

function NavbarLinkIcon({ icon, link }: NavbarLinkIconProps) {
  return (
    <Link to={link}>
      <IconButton
        size={"md"}
        icon={icon}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
      />
    </Link>
  );
}

export default NavbarLinkIcon;

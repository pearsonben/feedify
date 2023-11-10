import { Box, Flex, FlexProps, Icon, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";



interface NavItemProps extends FlexProps {
    icon: IconType;
    path: string;
    children: React.ReactNode;
  }


  const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
    return (
      <Link to={path}>
        <Box
          as="a"
          href="#"
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
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
              bg: useColorModeValue("primary.300", "primary.300"),
              color: "dark.50"
            }}
            color={"dark.50"}
            {...rest}
          >
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        </Box>
      </Link>
    );
  };

  export default NavItem
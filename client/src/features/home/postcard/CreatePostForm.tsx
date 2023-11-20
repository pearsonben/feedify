import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsBook, BsHeadphones } from "react-icons/bs";

function CreatePostForm() {
  return (
    <Box
      sx={{ borderRadius: "4px" }}
      mb={2}
      p={4}
      gap={2}
      bg={useColorModeValue("gray.100", "gray.900")}
      boxShadow="base"
    >
      <Flex h={"100%"} gap={4}>
        <Avatar name={"bennnn pearson"} />
        <Flex gap={2} direction={"column"} alignItems={"center"} flex={1}>
          <InputGroup w="100%" display={{ md: "inline-block" }}>
            <Input
              focusBorderColor="dark.50"
              bg={useColorModeValue("gray.200", "gray.800")}
              type="tel"
              border={"none"}
              placeholder="Write something about..."
              _placeholder={{
                opacity: 0.7,
                color: useColorModeValue("dark.500", "dark.50"),
              }}
            />
          </InputGroup>
          <Flex gap={4} wrap={"wrap"} justifyContent={"space-between"} w={"100%"} mt={2}>
            <Button
              flexGrow={1}
              leftIcon={<Icon as={BsBook} />}
              bg={useColorModeValue("gray.200", "gray.800")}
              variant="solid"
              _hover={{
                bg: useColorModeValue("primary.400", "gray.900")
              }}
            >
              Book
            </Button>
            <Button
              flexGrow={1}
              leftIcon={<Icon as={BsHeadphones} />}
              bg={useColorModeValue("gray.200", "gray.800")}
              variant="solid"
              _hover={{
                bg: useColorModeValue("primary.400", "gray.900")
              }}
            >
              Audiobook
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CreatePostForm;

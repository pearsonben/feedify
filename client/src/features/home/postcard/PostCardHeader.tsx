import {
  Text,
  Flex,
  Heading,
  Spacer,
  IconButton,
  VStack,
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";

interface PostCardHeaderProps {
  name: string;
}

function PostCardHeader({ name }: PostCardHeaderProps) {
  return (
    <Flex w={"100%"} gap="2">
      <VStack gap={0} align={"start"} justifyContent={"start"}>
        <Heading size="sm">{name}</Heading>
        <Text opacity={0.5}>12 seconds ago</Text>
      </VStack>
      <Spacer />
      <IconButton
        variant="ghost"
        aria-label="See menu"
        color={"primary.300"}
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  );
}

export default PostCardHeader;

import { Box, Flex, Text } from "@chakra-ui/react";

interface PostCardBodyProps {
  content: string;
}

function PostCardBody({ content }: PostCardBodyProps) {
  return (
    <Box my={4} ml={16}>
      <Flex align={"start"} gap={2}>
        <Text opacity={0.8}>{content}</Text>
      </Flex>
    </Box>
  );
}

export default PostCardBody;

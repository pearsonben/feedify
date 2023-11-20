import { Box, Text } from "@chakra-ui/react";

interface PostCardBodyProps {
  content: string;
}

function PostCardBody({ content }: PostCardBodyProps) {
  return (
    <Box>
        <Text opacity={0.8}>{content}</Text>
    </Box>
  );
}

export default PostCardBody;

import { Flex, Text } from "@chakra-ui/react";

interface CommentCardBodyProps {
  content: string;
}

function CommentCardBody({ content }: CommentCardBodyProps) {
  return (
    <Flex>
      <Text opacity={0.8}>{content}</Text>
    </Flex>
  );
}

export default CommentCardBody;

import { Divider, VStack, useColorModeValue } from "@chakra-ui/react";
import { PostComment } from "../../../../models/api/post";
import CommentCard from "./CommentCard";

interface CommentListProps {
  comments: PostComment[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <VStack
      ml={16}
      mt={6}
      align="stretch"
      spacing={4}
      divider={
        <Divider h={1} borderColor={useColorModeValue("dark.200", "dark.50")} />
      }
    >
      {comments.map((x, i) => (
        <CommentCard key={i} name={x.userName} content={x.content} />
      ))}
    </VStack>
  );
}

export default CommentList;

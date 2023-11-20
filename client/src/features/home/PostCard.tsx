import {
  Avatar,
  Box,
  Button,
  Flex,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { PostType } from "../../enums/enums";
import PostCardBody from "./postcard/PostCardBody";
import PostCardHeader from "./postcard/PostCardHeader";
import { BsFillChatDotsFill } from "react-icons/bs";
import { PostComment } from "../../models/api/post";
import CommentList from "./postcard/comment/CommentList";

export interface IPostCardProps {
  bookTitle: string;
  name: string;
  iconSource?: string;
  content?: string;
  dateString?: string;
  postType: PostType;
  liked?: boolean;
  comments?: PostComment[];
}

export default function PostCard({
  name,
  content,
  iconSource,
  bookTitle,
  postType,
  liked,
  comments,
}: IPostCardProps) {
  return (
    <Box>
      <Flex gap={4}>
        <Avatar name={name} src={iconSource} />
        
        <PostCardHeader bookTitle={bookTitle} name={name} postType={postType} />
        
      </Flex>
      {content && <PostCardBody content={content} />}
        {comments && <CommentList comments={comments} />}
      <Stack direction="row" mt={2} spacing={4}>
        <Spacer />
        <Button
          leftIcon={<BsFillChatDotsFill />}
          color={"dark.50"}
          _hover={{
            bg: "primary.200",
          }}
          bg={"primary.400"}
          variant="solid"
          size={"sm"}
        >
          Comment
        </Button>
      </Stack>
    </Box>
  );
}

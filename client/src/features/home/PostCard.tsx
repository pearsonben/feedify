import {
  Box
} from "@chakra-ui/react";
import { PostType } from "../../enums/enums";
import PostCardBody from "./postcard/PostCardBody";
import PostCardHeader from "./postcard/PostCardHeader";

export interface IPostCardProps {
  bookTitle: string;
  name: string;
  iconSource?: string;
  imageSource?: string;
  content?: string;
  dateString?: string;
  postType: PostType;
  liked?: boolean;
}

export default function PostCard({
  name,
  content,
  iconSource,
  bookTitle,
  postType,
  liked,
}: IPostCardProps) {
  return (
    <Box>
      <PostCardHeader bookTitle={bookTitle} iconSource={iconSource} name={name} postType={postType} liked={liked}  />

      {content && <PostCardBody content={content} />}
    </Box>
  );
}

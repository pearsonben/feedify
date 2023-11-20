import {
  Box,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import PostCard from "./PostCard";
import { PostType } from "../../enums/enums";
import { PostComment, UserPost } from "../../models/api/post";
import CreatePostForm from "./postcard/CreatePostForm";

const comments: PostComment[] = [
  {
    userName: "John Cena",
    content: "Nice one!",
  },
  {
    userName: "Wayne Rooney",
    content: "Hey rio want a lift in the mornin pal",
  },
];

const posts: UserPost[] = [
  {
    bookTitle: "Book Title 1",
    userName: "Ben Pearson",
    postType: PostType.StartedReading,
    comments: comments,
  },
  {
    bookTitle: "Children of Time",
    postType: PostType.FinishedReading,
    content:
      "Nostrud esse excepteur duis dolore ipsum occaecat velit laboris cupidatat duis in. Lorem fugiat est exercitation exercitation ut amet in incididunt est dolor laborum amet irure velit. Consectetur irure consequat anim elit tempor ea sunt in cupidatat proident tempor do ea. Mollit non ipsum non aute pariatur fugiat consequat. Eu incididunt ex ad mollit cupidatat sit nisi duis dolor qui excepteur voluptate.",
    userName: "H.G Wells",
    comments: [],
  },
  {
    bookTitle: "Dark Matter",
    content: "Cillum ex aliquip ad labore.",
    postType: PostType.FinishedReading,
    userName: "Elin Smith",
    comments: comments,
  },
  {
    bookTitle: "Cage Of Souls",
    postType: PostType.DNF,
    content:
      "Cillum voluptate quis cillum in esse ullamco consectetur occaecat ipsum sit.",
    userName: "John McGinn",
    comments: [],
  },
  {
    bookTitle: "Say Nothing",
    postType: PostType.FinishedReading,
    content: "Veniam aliquip minim sunt non incididunt do nisi exercitation.",
    userName: "Harry Maguire",
    comments: [],
  },
  {
    bookTitle: "Red Sparrow",
    postType: PostType.FinishedReading,
    content: "Cillum in veniam et tempor.",
    userName: "Adrian Tchaikovsky",
    comments: [],
  },
];

export default function PostsList() {
  return (
    <Box w={"2xl"} sx={{ borderRadius: "4px" }}>
      <VStack gap={1} align={"stretch"} spacing={0} divider={<StackDivider />}>

        <CreatePostForm />

        {posts.map((x, i) => (
          <PostCard
            key={i}
            bookTitle={x.bookTitle}
            name={x.userName}
            postType={x.postType}
            content={x.content}
            comments={x.comments}
          />
        ))}
      </VStack>
    </Box>
  );
}

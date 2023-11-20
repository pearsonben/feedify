import {
  Avatar,
  Box,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { PostType } from "../../enums/enums";
import PostCardBody from "./postcard/PostCardBody";
import PostCardHeader from "./postcard/PostCardHeader";
import {
  BsBookmark,
  BsFillChatDotsFill,
  BsShare,
} from "react-icons/bs";
import { PostComment } from "../../models/api/post";

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
}: IPostCardProps) {
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
        <Avatar name={name} />
        <Flex gap={2} direction={"column"} alignItems={"start"} flex={1}>
          <PostCardHeader name={name} />

          {content && <PostCardBody content={content} />}

          <Flex
            gap={4}
            wrap={"wrap"}
            justifyContent={"space-between"}
            w={"100%"}
            mt={2}
          >
            <Button
              leftIcon={<BsBookmark />}
              bg={useColorModeValue("gray.200", "gray.800")}
              variant="solid"
              size={"sm"}
              flexGrow={1}
              _hover={{
                bg: useColorModeValue("primary.400", "gray.900"),
              }}
            >
              Like
            </Button>
            <Button
              flexGrow={1}
              leftIcon={<BsFillChatDotsFill />}
              bg={useColorModeValue("gray.200", "gray.800")}
              variant="solid"
              size={"sm"}
              _hover={{
                bg: useColorModeValue("primary.400", "gray.900"),
              }}
            >
              Comment
            </Button>
            <Button
              flexGrow={1}
              leftIcon={<BsShare />}
              bg={useColorModeValue("gray.200", "gray.800")}
              variant="solid"
              size={"sm"}
              _hover={{
                bg: useColorModeValue("primary.400", "gray.900"),
              }}
            >
              Share
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

import { Text, Flex, Box, Avatar, Heading, Icon, Spacer, IconButton, Link } from '@chakra-ui/react'

import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { PostType, postTypeToMessage } from '../../../enums/enums'

interface PostCardHeaderProps {
    bookTitle: string;
    iconSource?: string;
    name: string;
    postType: PostType,
    liked?: boolean
}

function PostCardHeader({iconSource, name, bookTitle, postType, liked}: PostCardHeaderProps) {
  return (
    <Flex>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={name} src={iconSource} />
          <Box>
            <Heading as={"span"} size="sm">
              {name}{" "}
            </Heading>
            <Text as={"span"} opacity={0.8}>
              {postTypeToMessage(postType)}{" "}
              <Link color="primary.400" href="#" fontWeight={"semibold"}>
                {bookTitle}{" "}
              </Link>
              <Icon as={AiFillStar} color={"yellow.400"}></Icon>
              <Text as={"span"} size={"xs"} opacity={0.4}>
                3.2
              </Text>
            </Text>

            <Text opacity={0.5}>12 seconds ago</Text>
          </Box>
        </Flex>
        <Spacer />
        <IconButton
          colorScheme="gray"
          variant="ghost"
          aria-label="like"
          color={"primary.300"}
          icon={liked ? <AiFillHeart /> : <AiOutlineHeart />}
        ></IconButton>
        <IconButton
          variant="ghost"
          aria-label="See menu"
          color={"primary.300"}
          icon={<BsThreeDotsVertical />}
        />
      </Flex>
  )
}

export default PostCardHeader
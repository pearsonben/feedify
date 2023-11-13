
import { Text, Flex, Box, Avatar, Heading, IconButton } from '@chakra-ui/react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'



interface CommentCardHeaderProps {
    name: string;
    iconSource?: string;
    liked?: boolean;
}

function CommentCardHeader({name, iconSource, liked}: CommentCardHeaderProps) {
  return (
    <Flex>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar size={"xs"} name={name} src={iconSource} />
          <Box>
            <Heading as={"span"} size="xs">
              {name}{" "}
            </Heading>
            
            <Text size="xs" opacity={0.5}>12 seconds ago</Text>
          </Box>
        </Flex>
        
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

export default CommentCardHeader
import { Box } from '@chakra-ui/react';
import CommentCardHeader from './CommentCardHeader';
import CommentCardBody from './CommentCardBody';

interface CommentProps {
    name: string;
    iconSource?: string;
    content: string;
    liked?: boolean;
}

function CommentCard({name, iconSource, content, liked}: CommentProps) {
  return (
    <Box>
        <CommentCardHeader name={name} iconSource={iconSource} liked={liked} />
        <CommentCardBody content={content} />
    </Box>
  )
}

export default CommentCard
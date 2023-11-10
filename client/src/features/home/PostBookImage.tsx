import { AspectRatio, Image } from "@chakra-ui/react";

export interface PostBookImageProps {
  imageSource: string;
}

function PostBookImage({ imageSource }: PostBookImageProps) {
  return (
    <AspectRatio maxW={{ base: 16, md: 20 }} ratio={1 / 1.5}>
      <Image objectFit={"cover"} src={imageSource} alt="Dan Abramov" />
    </AspectRatio>
  );
}

export default PostBookImage;

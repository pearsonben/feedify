import { Heading } from "@chakra-ui/react";


interface PageTitleProps {
    title: string;
}

export default function PageTitle({title}: PageTitleProps) {

    return (
        <Heading size={"md"}>{title}</Heading>
    )

}
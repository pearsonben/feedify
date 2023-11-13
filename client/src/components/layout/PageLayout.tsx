import { Box } from "@chakra-ui/react";
import PageTitle from "./PageTitle";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <Box mt={20}>
      {title && <PageTitle title={title}></PageTitle>}
      <Box mt={6}>{children}</Box>
    </Box>
  );
}

import PostsList from "./PostsList";
import PageLayout from "../../components/layout/PageLayout";
import { Flex, Spacer } from "@chakra-ui/react";

export default function HomeDashboard() {
  return (
    <>
      <PageLayout title="Dashboard">
        <Flex w={"100%"} justifyContent={"center"}>
          <Spacer />
          <PostsList />
          <Spacer />
        </Flex>
      </PageLayout>
    </>
  );
}

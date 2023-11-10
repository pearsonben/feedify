import PostsList from "./PostsList";
import PageLayout from "../../components/layout/PageLayout";

export default function HomeDashboard() {
  return (
    <PageLayout title="Dashboard">
      <PostsList />
    </PageLayout>
  );
}

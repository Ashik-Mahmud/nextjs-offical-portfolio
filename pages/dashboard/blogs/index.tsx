import DashboardLayout from "@/components/layouts/DashboardLayout";

type Props = {};

const BlogsPage = (props: Props) => {
  return <div>BlogsPage</div>;
};

BlogsPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default BlogsPage;

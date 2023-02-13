import DashboardLayout from "@/components/layouts/DashboardLayout";

type Props = {};

const ProfilePage = (props: Props) => {
  return <div>ProfilePage</div>;
};

ProfilePage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProfilePage;

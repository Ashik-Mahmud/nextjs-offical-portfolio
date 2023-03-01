import DashboardLayout from "@/components/layouts/DashboardLayout";
import ScreenLoading from "@/components/ScreenLoading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  const { isLoading } = useAppContext();

  if (isLoading) return <ScreenLoading />;
  return <>Dashboard</>;
};

Dashboard.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;

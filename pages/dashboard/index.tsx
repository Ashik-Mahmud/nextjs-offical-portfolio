import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return <div>Dashboard</div>;
};

const getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;

import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const SettingsPage = (props: Props) => {
  return <div>SettingsPage</div>;
};

SettingsPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default SettingsPage;

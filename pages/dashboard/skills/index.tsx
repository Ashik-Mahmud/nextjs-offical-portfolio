import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

type Props = {};

const SkillsPage = (props: Props) => {
  return <div>SkillsPage</div>;
};

SkillsPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default SkillsPage;

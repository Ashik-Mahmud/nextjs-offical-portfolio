import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return <div>AboutPage</div>;
};

AboutPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default AboutPage;

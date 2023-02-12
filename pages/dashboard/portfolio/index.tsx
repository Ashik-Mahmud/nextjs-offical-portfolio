import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const PortfolioPage = (props: Props) => {
  return <div>PortfolioPage</div>;
};

PortfolioPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default PortfolioPage;

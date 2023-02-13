import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

type Props = {};

const OffersPage = (props: Props) => {
  return <div>OffersPage</div>;
};

OffersPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default OffersPage;

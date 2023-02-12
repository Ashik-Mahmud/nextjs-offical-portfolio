import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

type Props = {};

const ContactPage = (props: Props) => {
  return <div>ContactPage</div>;
};

ContactPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ContactPage;

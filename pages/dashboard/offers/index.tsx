import DashboardLayout from "@/components/layouts/DashboardLayout";
import Link from "next/link";
import React from "react";

type Props = {};

const OffersPage = (props: Props) => {
  return (
    <div>
      <div className="title font-amiri flex items-center justify-between">
        <h3 className="text-xl font-bold">Offer Page Customize</h3>
        <Link
          className="p-2 px-5 bg-transparent border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-blue-50 transition-all"
          href={"/dashboard/offers/add"}
        >
          Add Offer
        </Link>
      </div>
    </div>
  );
};

OffersPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default OffersPage;

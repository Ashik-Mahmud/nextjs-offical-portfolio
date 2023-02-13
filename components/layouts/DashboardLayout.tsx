import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <div className="grid grid-cols-12 gap-5">
        {/* sidebar here */}
        <aside className="col-span-2 bg-[#ffffff3f] border rounded-r-[3rem] shadow backdrop-blur-md h-screen">
          <Sidebar />
        </aside>
        {/* main content here */}
        <main className="col-span-10 p-2">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

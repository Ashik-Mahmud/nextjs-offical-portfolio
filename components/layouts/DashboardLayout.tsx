import Head from "next/head";
import React from "react";
import { BiGridAlt } from "react-icons/bi";
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
      <div className="grid grid-cols-12 gap-0">
        {/* sidebar here */}
        <aside className="col-span-2 bg-[#ffffff3f] border rounded-r-[0rem] shadow backdrop-blur-md h-screen">
          <Sidebar />
        </aside>
        {/* main content here */}
        <main className="col-span-10 p-2 mx-4">
          <div className="dashboard-header flex items-center justify-between p-4 py-3 bg-[#ffffff3f] border rounded-[0rem]  backdrop-blur-md">
            <div className="flex items-center gap-2 cursor-pointer">
              <BiGridAlt size={25} />{" "}
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>

            {/* quick access search bar */}
            <div>
              <input
                type="text"
                placeholder="Search"
                className="bg-[#ffffff3f] border rounded-md p-2 w-72"
              />
            </div>

            <div className="flex items-center gap-2 mr-4">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/me.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold">Ashik Mahmud</span>
                  <span className="text-xs text-gray-500">Admin</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-red-100 text-red-500 text-white px-2 py-1 rounded-md">
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="content bg-[#ffffff49] backdrop-blur-sm p-4 my-2 w-full shadow-sm border border-gray-100 rounded">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

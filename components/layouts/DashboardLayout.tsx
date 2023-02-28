import { useAppContext } from "@/context/AppContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BiGridAlt } from "react-icons/bi";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const { isAuth, isLoading } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuth) {
      router.push("/login");
    }

    return () => {};
  }, [isAuth, router]);

  console.log(isAuth, isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>
      <div className="">
        {/* sidebar here */}
        <aside className="sidebar col-span-2 bg-[#ffffff3f] border rounded-r-[0rem] shadow backdrop-blur-md h-screen">
          <Sidebar />
        </aside>
        {/* main content here */}
        <main className="main-content p-2 mx-4">
          <div className="dashboard-header flex items-center justify-between p-4 py-3 bg-[#ffffff3f] border rounded-[0rem]  backdrop-blur-md sticky top-2 z-50">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 cursor-pointer">
                <BiGridAlt size={25} />{" "}
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
              <Link
                href="/"
                target={"_blank"}
                className="bg-blue-50 text-blue-500 px-4 rounded py-1 font-amiri"
              >
                View Site
              </Link>
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
                <Image
                  src="/assets/images/me.jpg"
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold">Ashik Mahmud</span>
                  <span className="text-xs text-gray-500">Admin</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-red-100 text-red-500  px-2 py-1 rounded-md">
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-[#ffffff49] backdrop-blur-sm p-4 my-2  shadow-sm border border-gray-100 rounded">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

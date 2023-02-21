import DashboardLayout from "@/components/layouts/DashboardLayout";
import Link from "next/link";
import React from "react";
import { BiEditAlt, BiLink, BiTrash } from "react-icons/bi";

type Props = {};

const PortfolioPage = (props: Props) => {
  return (
    <div>
      <div className="title font-amiri flex items-center justify-between">
        <h3 className="text-xl font-bold">Portfolio Page Customize</h3>
        <Link
          className="p-2 px-5 bg-transparent border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-blue-50 transition-all"
          href={"/dashboard/portfolio/add"}
        >
          Add Portfolio
        </Link>
      </div>
      <div className="overflow-x-auto my-3 bg-white p-2 font-amiri">
        <table className="table w-full text-left">
          <thead className=" bg-gray-100">
            <tr className="">
              <th className="p-3 font-medium">Portfolio Title</th>
              <th className="p-3 font-medium">Portfolio Category</th>
              <th className="p-3 font-medium">Portfolio Description</th>
              <th className="p-3 font-medium"> Links</th>
              <th className="p-3 font-medium"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b hover:bg-gray-50">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded object-cover border"
                    src="https://raw.githubusercontent.com/Ashik-Mahmud/nextjs-official-portfolio/main/preview.png"
                    alt="profile"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-bold">NextJs Developer</span>

                    <div className="flex flex-wrap gap-1">
                      <span className="bg-gray-100  p-1 border rounded  text-xs ">
                        NextJs
                      </span>
                      <span className="bg-gray-100  p-1 border rounded  text-xs ">
                        NextJs
                      </span>
                      <span className="bg-gray-100  p-1 border rounded  text-xs ">
                        NextJs
                      </span>
                      <span className="bg-gray-100  p-1 border rounded  text-xs ">
                        NextJs
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-2">
                <span className="text-blue-500 bg-blue-50 p-2 px-4">
                  Web Development
                </span>
              </td>
              <td className="p-2">
                I really not found where I dive on the codes.....
              </td>
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <a
                    className="text-blue-500 flex items-center gap-1 text-sm"
                    href="https://ashikmahmud.me"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLink /> Live
                  </a>
                  <a
                    className="text-blue-500 flex items-center gap-1 text-sm"
                    href="https://ashikmahmud.me"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLink /> Client Live
                  </a>
                  <a
                    className="text-blue-500 flex items-center gap-1 text-sm"
                    href="https://ashikmahmud.me"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLink /> Server Live
                  </a>
                </div>
              </td>
              <td className="p-2">
                <div className="flex items-center">
                  <button className="text-blue-500">
                    <BiEditAlt />
                  </button>
                  <button className="text-red-500">
                    <BiTrash />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

PortfolioPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default PortfolioPage;

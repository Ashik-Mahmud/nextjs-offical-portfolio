import DashboardLayout from "@/components/layouts/DashboardLayout";
import Link from "next/link";
import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

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

      <div className="overflow-x-auto mt-5">
        <table className="table w-full text-left">
          <thead className="p-3 bg-gray-100">
            <tr className="p-2">
              <th className="p-2">SL No</th>
              <th className="p-2">Offer Title</th>
              <th className="p-2">Offer Description</th>
              <th className="p-2">Offer Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b">
              <td className="p-2">1</td>
              <td className="p-2">NextJs Developer</td>
              <td className="p-2">
                I really not found where I dive on the codes.....
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

OffersPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default OffersPage;

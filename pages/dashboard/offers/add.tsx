import DashboardLayout from "@/components/layouts/DashboardLayout";
import Link from "next/link";
import React from "react";

type Props = {};

const AddOfferPage = (props: Props) => {
  return (
    <div className="font-amiri">
      <div className="flex items-center justify-between ">
        <h3 className="text-xl font-bold">Add Offer</h3>
        <Link
          className="p-2 px-5 bg-blue-500 text-blue-50 rounded font-amiri"
          href={"/dashboard/offers"}
        >
          Offer List
        </Link>
      </div>
      <div className="offer-form ">
        <form action="" className="py-5">
          <div className="input-group ">
            <label htmlFor="title">Offer Title</label>

            <select
              name=""
              id=""
              className="w-full border p-3 rounded outline-none"
            >
              <option value="">select offer</option>
              <option value="Web Development">Web Development</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="App Development">App Development</option>
              <option value="Web App Development">Web App Development</option>
              <option value="Database Managing">Database Managing</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="MERN Stack">MERN Stack</option>
            </select>
          </div>
          <div className="input-group mt-4">
            <label htmlFor="description">Offer Description</label>
            <textarea
              name="description"
              id="description"
              cols={3}
              rows={4}
              className="w-full border outline-none my-1 rounded p-3"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-blue-50 p-3 px-5">
            Save Offer
          </button>
        </form>
      </div>
    </div>
  );
};

AddOfferPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddOfferPage;

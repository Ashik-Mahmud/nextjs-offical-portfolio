import DashboardLayout from "@/components/layouts/DashboardLayout";
import React, { useState } from "react";

type Props = {};

const AboutPage = (props: Props) => {
  const [isUrl, setIsUrl] = useState(false);
  return (
    <div>
      <h2 className="text-2xl font-medium font-amiri">
        Customize Home/About Page
      </h2>

      {/* edit name or tagline */}
      <div className="content my-8 px-5">
        <form action="" className="flex flex-col gap-3">
          <div className="header flex flex-col gap-3">
            <span className="text-xl">
              <strong>Header</strong>
            </span>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"Ashik Mahmud"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                name="tagline"
                id="tagline"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"Web & MERN Stack Developer based in Bangladesh"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="images" className="flex items-center gap-2">
                Hero Image
                <span
                  className="cursor-pointer  px-1 bg-blue-500 text-white"
                  onClick={() => setIsUrl((prev) => !prev)}
                >
                  {isUrl ? "upload" : "url"}
                </span>
              </label>
              {isUrl ? (
                <input
                  type="url"
                  name="image"
                  id="image"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              ) : (
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              )}
            </div>
          </div>
          <div className="header flex flex-col gap-3">
            <span className="text-xl">
              <strong>Meta</strong>
            </span>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="biography">Biography</label>
              <input
                type="text"
                name="biography"
                id="biography"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={
                  "Doing work for money and love. Being consider to take otherwise and more expensive way"
                }
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                name="contact"
                id="contact"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={
                  "Dhaka, Bangladesh | ashikmahmud187@gmail.com | +8801610849175"
                }
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="services">Services</label>
              <input
                type="text"
                name="services"
                id="services"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={
                  "Frontend Development, Backend Development, Full Stack Development, Web App Developer"
                }
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="experience">Years Of Experiences</label>
              <input
                type="text"
                name="experience"
                id="experience"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"2+"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="client">Satisfied Client</label>
              <input
                type="text"
                name="client"
                id="client"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"100%"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="done-project">Project Done</label>
              <input
                type="text"
                name="done-project"
                id="done-project"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"200+"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="worldwide-client">Worldwide Client</label>
              <input
                type="text"
                name="worldwide-client"
                id="worldwide-client"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"20+"}
              />
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md self-start">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

AboutPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default AboutPage;

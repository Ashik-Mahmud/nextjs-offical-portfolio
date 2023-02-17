import DashboardLayout from "@/components/layouts/DashboardLayout";
import Link from "next/link";
import { useState } from "react";
import { BiX } from "react-icons/bi";

type Props = {};

const AddPortfolio = (props: Props) => {
  const [technologies, setTechnologies] = useState(["html", "css", "js"]);
  return (
    <div className="font-amiri">
      <div className="title font-amiri flex items-center justify-between">
        <h3 className="text-xl font-bold">Add Portfolio</h3>
        <Link
          href={"/dashboard/portfolio"}
          className="p-3 px-5 bg-blue-500 text-blue-50"
        >
          All Portfolios
        </Link>
      </div>
      <div className="portfolio-add-form mt-4">
        <form action="">
          <div className="input-group mb-3 bg-gray-100 p-3 rounded border">
            <label htmlFor="title">
              Portfolio Category <span className="text-red-500">*</span>
            </label>
            <select
              name=""
              id=""
              className="w-full border p-3 rounded outline-none cursor-pointer"
            >
              <option value="">Select Category</option>
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
          <div className="my-5 p-4 flex flex-col gap-1">
            <div className="input-group">
              <label htmlFor="project-title">Project Title</label>
              <input
                type="text"
                name="project-title"
                id="project-title"
                className="w-full border p-3 rounded outline-none"
              />
            </div>
            <div className="input-group">
              <label htmlFor="project-description">Project Description</label>
              <textarea
                name="project-description"
                id="project-description"
                cols={3}
                rows={4}
                className="w-full border outline-none my-1 rounded p-3"
              ></textarea>
            </div>
            <div className="input-group">
              {/* technologies showing area */}
              {technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100  text-sm border rounded flex items-between"
                    >
                      <span className="p-1 px-2"> {technology}</span>
                      <span
                        className="text-red-500 bg-gray-50 p-1 px-0 border-l text-lg cursor-pointer grid place-items-center"
                        onClick={() => {
                          const newTechnologies = technologies.filter(
                            (tech: string) => tech !== technology
                          );
                          setTechnologies(newTechnologies);
                        }}
                      >
                        <BiX />
                      </span>
                    </span>
                  ))}
                </div>
              )}
              {technologies?.length >= 5 && (
                <div className="text-red-500 text-sm">
                  You can not add more than 5 technologies
                </div>
              )}

              <label htmlFor="project-technologies">
                Project Technologies{" "}
                <small>
                  [ Write Single technology name and click on{" "}
                  <kbd className="font-bold">SPACE</kbd>]
                </small>
              </label>
              <input
                type="text"
                id="project-technologies"
                name="project-technologies"
                className="w-full p-3 rounded border outline-none"
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                    if (e.currentTarget.value === "") return;
                    if (technologies.length >= 5) return;
                    const newTechnology = e.currentTarget.value;
                    setTechnologies([...technologies, newTechnology]);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>

            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded border mt-3">
              <div className="input-group  flex-1">
                <label htmlFor="client-link">Client Code Link</label>
                <input
                  type="text"
                  name="client-link"
                  id="client-link"
                  className="w-full border p-3 rounded outline-none"
                />
              </div>
              <div className="input-group flex-1">
                <label htmlFor="live-link">Live Link</label>
                <input
                  type="text"
                  name="live-link"
                  id="live-link"
                  className="w-full border p-3 rounded outline-none"
                />
              </div>
              <div className="input-group flex-1">
                <label htmlFor="server-link">Server Code Link</label>
                <input
                  type="text"
                  name="server-link"
                  id="server-link"
                  className="w-full border p-3 rounded outline-none"
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="project-image">Project Image</label>
              <input
                type="file"
                name="project-image"
                id="project-image"
                className="w-full border p-3 rounded outline-none"
              />
            </div>

            <div className="input-group mt-4">
              <button className="bg-blue-500 text-blue-50 p-3 rounded">
                Add Portfolio
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

AddPortfolio.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddPortfolio;

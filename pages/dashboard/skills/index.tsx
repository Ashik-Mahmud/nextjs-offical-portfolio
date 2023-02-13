import DashboardLayout from "@/components/layouts/DashboardLayout";
import { BiEdit, BiTrash } from "react-icons/bi";

type Props = {};

const SkillsPage = (props: Props) => {
  return (
    <>
      <div>
        <div className="title flex items-center justify-between">
          <h2 className="text-2xl font-bold my-2 font-amiri">
            Skills pages Customization
          </h2>
          <button className="px-3 bg-blue-100 text-blue-600 p-2">
            Add Skill
          </button>
        </div>
        <div className="content my-8 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-amiri">
          {/* frontend dev */}
          <div className="flex flex-col gap-3 shadow p-3 bg-[#ffffffad] backdrop-blur-sm">
            <h3 className="text-xl font-bold">Frontend Development</h3>
            <div>
              <table className="table w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">Skill</th>
                    <th className="p-2">Level</th>
                    <th className="p-2 w-10">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 ">HTML</td>
                    <td className="p-2  pr-6">
                      <div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="w-11/12 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span className="cursor-pointer text-blue-600">
                          <BiEdit />
                        </span>
                        <span className="cursor-pointer text-red-600">
                          <BiTrash />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* backend dev */}
          <div className="flex flex-col gap-3 shadow p-3 bg-[#ffffffad] backdrop-blur-sm">
            <h3 className="text-xl font-bold">Backend Development</h3>
            <div>
              <table className="table w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">Skill</th>
                    <th className="p-2">Level</th>
                    <th className="p-2 w-10">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">HTML</td>
                    <td className="p-2 pr-6">
                      <div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="w-11/12 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span className="cursor-pointer text-blue-600">
                          <BiEdit />
                        </span>
                        <span className="cursor-pointer text-red-600">
                          <BiTrash />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* database dev */}
          <div className="flex flex-col gap-3 shadow p-3 bg-[#ffffffad] backdrop-blur-sm">
            <h3 className="text-xl font-bold">Database Development</h3>
            <div>
              <table className="table w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">Skill</th>
                    <th className="p-2">Level</th>
                    <th className="p-2 w-10">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">HTML</td>
                    <td className="p-2 pr-6">
                      <div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="w-11/12 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span className="cursor-pointer text-blue-600">
                          <BiEdit />
                        </span>
                        <span className="cursor-pointer text-red-600">
                          <BiTrash />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* database dev */}
          <div className="flex flex-col gap-3 shadow p-3 bg-[#ffffffad] backdrop-blur-sm">
            <h3 className="text-xl font-bold">Others Development</h3>
            <div>
              <table className="table w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2">Skill</th>
                    <th className="p-2">Level</th>
                    <th className="p-2 w-10">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">HTML</td>
                    <td className="p-2 pr-6">
                      <div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="w-11/12 h-full bg-blue-500 rounded-full"></div>
                        </div>
                        <span>90%</span>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <span className="cursor-pointer text-blue-600">
                          <BiEdit />
                        </span>
                        <span className="cursor-pointer text-red-600">
                          <BiTrash />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SkillsPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default SkillsPage;

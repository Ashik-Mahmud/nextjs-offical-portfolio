import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const AddSkill = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <h3 className="text-2xl font-amiri flex items-center gap-4">
        <span
          className="cursor-pointer"
          onClick={() => router.push(`/dashboard/skills`)}
        >
          <BiArrowBack />
        </span>
        Add Skill
      </h3>
      <form action="" className="mt-4 p-8 bg-white">
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            name="skill"
            id="skill"
            className="w-full p-3 rounded border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-3  mb-3">
          <label htmlFor="level">Level (%)</label>
          <input
            type="number"
            name="level"
            id="level"
            className="w-full p-3 rounded border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="category">Category</label>
          <select
            name=""
            id=""
            className="w-full p-3 rounded  border border-gray-300"
          >
            <option value="">Frontend Development</option>
            <option value="">Backend Development</option>
            <option value="">Database Development</option>
            <option value="">Others</option>
          </select>
        </div>
        <button className="px-5 bg-blue-100 text-blue-600 p-4">
          Add Skill
        </button>
      </form>
    </div>
  );
};

AddSkill.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default AddSkill;

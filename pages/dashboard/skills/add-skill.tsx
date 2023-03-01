import { useCreateSkillMutation } from "@/apis/skillApi";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
type Props = {};

const AddSkill = (props: Props) => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [createSkill, { data, isLoading, error }] = useCreateSkillMutation();
  /* handle skill form */
  const handleSkillForm = handleSubmit(async (data) => {
    console.log(data);
    await createSkill(data);
  });

  /* handle error */
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      toast.success("Skill added successfully");
      router.push(`/dashboard/skills`);
    }
  }, [error, data, router]);
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
      <form action="" className="mt-4 p-8 bg-white" onSubmit={handleSkillForm}>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="name">Skill</label>
          <input
            type="text"
            {...register("name", { required: true })}
            id="name"
            className="w-full p-3 rounded border border-gray-300"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-3  mb-3">
          <label htmlFor="level">Level (%)</label>
          <input
            type="number"
            {...register("level", { required: true })}
            id="level"
            className="w-full p-3 rounded border border-gray-300"
          />
          {errors.level && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="category">Category</label>
          <select
            {...register("category", { required: true })}
            id=""
            className="w-full p-3 rounded  border border-gray-300"
          >
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Database Development">Database Development</option>
            <option value="Others">Others</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {isLoading ? (
          <button className="px-5 bg-blue-100 text-blue-600 p-4" disabled>
            adding...
          </button>
        ) : (
          <button className="px-5 bg-blue-100 text-blue-600 p-4">
            Add Skill
          </button>
        )}
      </form>
    </div>
  );
};

AddSkill.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default AddSkill;

import DashboardLayout from "@/components/layouts/DashboardLayout";

type Props = {};

const AddAchievement = (props: Props) => {
  return (
    <div>
      <div className="title font-amiri flex items-center justify-between">
        <h3 className="text-xl font-bold">Add Achievements</h3>
      </div>
      <div className="overflow-x-auto my-3 bg-white p-6">
        <form action="">
          <div className="mb-3">
            <label htmlFor="title" className="block mb-2">
              Achievements Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="block mb-2">
              Achievements Description
            </label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={5}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="links" className="block mb-2">
              Achievements Links
            </label>
            <input
              type="text"
              name="links"
              id="links"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="block mb-2">
              Achievements Image
            </label>
            <input
              type="file"
              name="category"
              id="category"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-3">
            <button className="p-2 px-5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
              Add Achievements
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddAchievement.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddAchievement;

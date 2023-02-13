import { BiX } from "react-icons/bi";

type Props = {};

const AddSkillModal = (props: Props) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-red-50 grid place-items-center">
      {/* <div className="w-full h-full z-10 fixed bg-red-500 left-0 top-0"></div> */}
      <div className="modal p-10 bg-white z-50">
        <div className="modal-content">
          <div className="modal-header flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold">Add Skill</h2>
            <span className="cursor-pointer text-red-600 bg-red-50 p-3 text-3xl">
              <BiX />
            </span>
          </div>
          <div className="modal-body">
            <form action="" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 justify-between">
                <label htmlFor="skill">Skill</label>
                <input
                  type="text"
                  name="skill"
                  id="skill"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label htmlFor="level">Level</label>
                <input
                  type="text"
                  name="level"
                  id="level"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label htmlFor="experience">Experience</label>
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              </div>
              <div className="flex items-center gap-2 justify-between">
                <button className="bg-blue-500 text-white px-3 py-2 rounded">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;

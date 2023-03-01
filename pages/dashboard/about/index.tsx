import { useGetHomeQuery, useSaveHomeMutation } from "@/apis/HomeApi";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type Props = {};

const AboutPage = (props: Props) => {
  const [isUrl, setIsUrl] = useState(false);

  /* hook form */

  const [SaveHome, { isLoading, error, data }] = useSaveHomeMutation();
  const { data: homeData } = useGetHomeQuery({});
  const { handleSubmit, register } = useForm({
    values: {
      name: homeData?.name,
      tagline: homeData?.tagline,
      biography: homeData?.biography,
      contact: homeData?.contact,
      services: homeData?.services,
      yOfExp: homeData?.yOfExp,
      projectDone: homeData?.projectDone,
      satisfiedClient: homeData?.satisfiedClient,
      worldWideClient: homeData?.worldWideClient,
      image: homeData?.heroImage?.url,
    },
  });

  /* handle form */
  const handleAboutForm = handleSubmit(async (data) => {
    const formData = new FormData();
    const { image, ...other } = data;

    /* check if image more than 5 mb */
    if (image[0].size > 5000000) {
      alert("Image size must be less than 5 mb");
      return;
    }

    /* append image to form data */
    formData.append("file", image[0]);
    formData.append("data", JSON.stringify(other));

    /* save data */
    await SaveHome(formData).unwrap();
  });

  /* handle errors and more */
  useEffect(() => {
    if (data) {
      console.log(data);
      toast.success("Home/About page updated");
    }
    if (error) {
      console.log(error);
    }
  }, [error, data]);

  return (
    <div>
      <h2 className="text-2xl font-medium font-amiri">
        Customize Home/About Page
      </h2>

      {/* edit name or tagline */}
      <div className="content my-8 px-5">
        <form
          action=""
          onSubmit={handleAboutForm}
          className="flex flex-col gap-3"
        >
          <div className="header flex flex-col gap-3">
            <span className="text-xl">
              <strong>Header</strong>
            </span>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                {...register("name")}
                id="name"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"Ashik Mahmud"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="tagline">Tagline</label>
              <input
                type="text"
                {...register("tagline")}
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
                  {...register("image")}
                  id="image"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              ) : (
                <input
                  type="file"
                  {...register("image")}
                  id="image"
                  className="w-4/5 border outline-none p-3 rounded"
                />
              )}
            </div>
            {homeData?.heroImage?.url && (
              <div className="flex items-end justify-end">
                <Image
                  src={homeData?.heroImage?.url}
                  width={50}
                  height={50}
                  alt={homeData?.name}
                  className="w-24 h-24 rounded-md object-cover border-4 "
                />
              </div>
            )}
          </div>
          <div className="header flex flex-col gap-3">
            <span className="text-xl">
              <strong>Meta</strong>
            </span>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="biography">Biography</label>
              <input
                type="text"
                {...register("biography")}
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
                {...register("contact")}
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
                {...register("services")}
                id="services"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={
                  "Frontend Development, Backend Development, Full Stack Development, Web App Developer"
                }
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="yOfExp">Years Of Experiences</label>
              <input
                type="text"
                {...register("yOfExp")}
                id="yOfExp"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"2+"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="satisfiedClient">Satisfied Client</label>
              <input
                type="text"
                {...register("satisfiedClient")}
                id="satisfiedClient"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"100%"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="done-project">Project Done</label>
              <input
                type="text"
                {...register("projectDone")}
                id="done-project"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"200+"}
              />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <label htmlFor="worldwide-client">Worldwide Client</label>
              <input
                type="text"
                {...register("worldWideClient")}
                id="worldwide-client"
                className="w-4/5 border outline-none p-3 rounded"
                defaultValue={"20+"}
              />
            </div>
          </div>
          {isLoading ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md self-start opacity-50"
              disabled
            >
              Saving...
            </button>
          ) : (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md self-start">
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

AboutPage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default AboutPage;

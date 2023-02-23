import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "sample",
  api_key: "874837483274837",
  api_secret: "a676b67565c6767a6767d6767f676fe1",
  secure: true,
});

export const uploadImage = async (file: any, path: string) => {
  const result = await cloudinary.uploader.upload(file, {
    folder: "portfolios/" + path + "/", // folder name
    use_filename: true,
    unique_filename: false,
  });
  return result;
};

export const deleteImage = async (public_id: string, path: string) => {
  const result = await cloudinary.uploader.destroy(
    "portfolios/" + path + "/" + public_id
  );
  return result;
};

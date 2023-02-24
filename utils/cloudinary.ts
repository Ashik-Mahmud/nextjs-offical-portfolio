import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
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
  const result = await cloudinary.uploader.destroy(public_id, {
    folder: "portfolios/" + path + "/", // folder name
  });
  return result;
};

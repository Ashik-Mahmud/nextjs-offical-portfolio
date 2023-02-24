import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Achievement from "@/models/achievementModel";
import apiRoute from "@/utils/apiRoute";
import { uploadImage } from "@/utils/cloudinary";
import upload from "@/utils/multer";
import bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.use(upload.single("achievementImage"));
apiRoute.use(bodyParser.json({ limit: "50mb" }));
apiRoute.use(bodyParser.urlencoded({ extended: true }));
apiRoute.use(bodyParser.json());
apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const userId = req.userId;
    const data = JSON.parse(req.body.data);

    const hasAchievement = await Achievement.findOne({
      title: data.title,
      user: req.userId,
    });

    if (hasAchievement) {
      return res.status(404).send({
        success: false,
        message: "Achievement already exist in the database",
      });
    }

    const image = {
      url: "",
      public_id: "",
    };

    if (req.file) {
      const uploadedImage = await uploadImage(req.file.path, "achievements");
      image.url = uploadedImage.secure_url;
      image.public_id = uploadedImage.public_id;
    }

    const achievement = await Achievement.create({
      ...data,
      image,
      user: userId,
    });

    res.status(202).send({
      success: true,
      message: "create new achievement",
      achievement,
    });
  } catch (err: any) {
    console.log(err);
    res.status(404).send({
      success: false,
      message: "internal server error" + err?.message,
    });
  }
});

export default connectDB(apiRoute);
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

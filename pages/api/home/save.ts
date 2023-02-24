import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Home from "@/models/homeModel";
import apiRoute from "@/utils/apiRoute";
import { uploadImage } from "@/utils/cloudinary";
import upload from "@/utils/multer";
import bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";

// protect the route
apiRoute.use(VerifyToken);
apiRoute.use(bodyParser.json({ limit: "50mb" }));
apiRoute.use(bodyParser.urlencoded({ extended: true }));
apiRoute.use(bodyParser.json());
apiRoute.use(upload.single("file"));

apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const data = JSON.parse(req.body.data);
  const file = req.file;
  const userId = req.userId;

  const home = await Home.findOne({ user: userId });
  const heroImage = {
    url: "",
    public_id: "",
  };

  if (file) {
    const image = await uploadImage(file.path, "home");
    heroImage.url = image.secure_url;
    heroImage.public_id = image.public_id;
  } else {
    heroImage.url = home.heroImage.url;
    heroImage.public_id = home.heroImage.public_id;
  }

  if (home) {
    const updatedHome = await Home.findOneAndUpdate(
      { user: userId },
      {
        $set: {
          heroImage,
          ...data,
        },
      },
      { new: true }
    );
    return res.json({
      success: true,
      message: "Home updated successfully",
      home: updatedHome,
    });
  } else {
    const newHome = new Home({
      user: userId,
      heroImage,
      ...data,
    });
    await newHome.save();
    return res.json({
      success: true,
      message: "Home created successfully",
      home: newHome,
    });
  }
});

export default connectDB(apiRoute);
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

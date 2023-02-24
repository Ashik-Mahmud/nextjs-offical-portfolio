import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import apiRoute from "@/utils/apiRoute";
import Home from "@/models/homeModel";
import bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";
import { uploadImage } from "@/utils/cloudinary";

const multer = require("multer");

const storage = multer.diskStorage({});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },

  fileFilter: (req: NextApiRequest | any, file: any, cb: any) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

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

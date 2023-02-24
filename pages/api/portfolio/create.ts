import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Portfolio from "@/models/portfolioModel";
import apiRoute from "@/utils/apiRoute";
import { uploadImage } from "@/utils/cloudinary";
import upload from "@/utils/multer";
import bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.use(upload.single("portfolioImage"));
apiRoute.use(bodyParser.json({ limit: "50mb" }));
apiRoute.use(bodyParser.urlencoded({ extended: true }));
apiRoute.use(bodyParser.json());
apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const data = JSON.parse(req.body.data);
    const hasPortfolio = await Portfolio.findOne({
      title: data.title,
      user: req.userId,
    });

    if (hasPortfolio) {
      return res.status(404).send({
        success: false,
        message: "Portfolio already exist in the database",
      });
    }
    const image = {
      url: "",
      public_id: "",
    };
    if (req.file) {
      const uploadedImage = await uploadImage(req.file.path, "portfolios");
      image.url = uploadedImage.secure_url;
      image.public_id = uploadedImage.public_id;
    }

    const portfolio = await Portfolio.create({ ...data, image });
    res.status(202).send({
      success: true,
      message: "create new portfolio",
      portfolio,
    });
  } catch (err: any) {
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

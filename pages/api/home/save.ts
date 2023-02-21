import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import apiRoute from "@/utils/apiRoute";
import bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";

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

  console.log(data);
});

export default connectDB(apiRoute);
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

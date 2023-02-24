import { NextApiRequest } from "next";

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

export default upload;

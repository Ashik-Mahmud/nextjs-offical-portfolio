import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
var bodyParser = require("body-parser");
const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// error handler

export default apiRoute;
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

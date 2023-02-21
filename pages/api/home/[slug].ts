import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest | any, res: NextApiResponse) {
  const { slug } = req.query;
  const method = req.method;
  const user = req?.user?.id;

  await VerifyToken(req, res);

  if (method === "POST" && slug === "save") {
    res.status(202).send({
      success: true,
      message: `Working Save Home Content`,
      _id: req.user,
    });
  }
}
export default connectDB(handler);

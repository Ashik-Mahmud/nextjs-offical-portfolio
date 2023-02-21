import connectDB from "@/middlewares/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  // ...
  const method = req.method;
  if (method === "POST") {
    const { email, password, name } = req.body;
    console.log(email, password, name);
  } else {
    res.status(404).json({
      message: "Route not found",
    });
  }
}

export default connectDB(handler);

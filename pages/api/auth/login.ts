import connectDB from "@/middlewares/connectDB";
import User from "@/models/userModel";
import GenerateToken from "@/utils/GenerateToken";
import { verifyPassword } from "@/utils/Password";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ...
  if (req.method === "POST") {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(404).send({
        success: false,
        message: `${email} is not registered yet.`,
      });
    }
    const isMatch = await verifyPassword(password, foundUser.password);
    if (!isMatch) {
      res.status(404).send({
        success: false,
        message: `Wrong credentials`,
      });
    }

    const token = await GenerateToken(foundUser?._id);
    const { password: dbPwd, ...other } = foundUser.toObject();
    res.status(202).send({
      success: true,
      message: `Login success`,
      data: {
        token,
        user: other,
      },
    });
  } else {
    res.status(404).send({
      success: false,
      message: `Route not found.`,
    });
  }
}

export default connectDB(handler);

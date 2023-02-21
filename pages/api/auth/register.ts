import connectDB from "@/middlewares/connectDB";
import User from "@/models/userModel";
import GenerateToken from "@/utils/GenerateToken";
import { hashedPassword } from "@/utils/Password";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ...
  const method = req.method;
  if (method === "POST") {
    const { email, password, name } = req.body;
    const isHas = await User.findOne({ email });
    if (isHas) {
      return res.status(404).send({
        success: false,
        message: `${email} is already registered.`,
      });
    }

    const newPassword = await hashedPassword(password);
    const user = new User({
      name,
      email,
      password: newPassword,
    });
    await user.save();
    const token = await GenerateToken(user?._id);
    res.status(202).send({
      success: true,
      message: `${email} is registered successfully`,
      token,
    });
  } else {
    res.status(404).json({
      message: "Route not found",
    });
  }
}

export default connectDB(handler);

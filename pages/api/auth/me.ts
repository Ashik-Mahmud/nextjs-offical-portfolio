import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import User from "@/models/userModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: "No user found." });
    }
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default connectDB(apiRoute);

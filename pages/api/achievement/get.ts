import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Achievement from "@/models/achievementModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const achievements = await Achievement.find({ user: req.userId });
  const total = await Achievement.countDocuments({ user: req.userId });
  res.status(202).send({
    success: true,
    message: "get all the Achievements ",
    data: {
      achievements,
      total: total,
    },
  });
});
export default connectDB(apiRoute);

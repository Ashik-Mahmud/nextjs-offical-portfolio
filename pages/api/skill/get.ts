import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Skill from "@/models/skillModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const skills = await Skill.find({ user: req.userId });
  const total = await Skill.countDocuments({ user: req.userId });

  res.status(202).send({
    success: true,
    message: "get all the skills",
    data: {
      skills,
      total: total,
    },
  });
});
export default connectDB(apiRoute);

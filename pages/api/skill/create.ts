import VerifyToken from "@/middlewares/VerifyToken";
import Skill from "@/models/skillModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const { name, level, category } = req.body;

  const skill = new Skill({
    name,
    level,
    category,
    user: req.userId,
  });

  await skill.save();

  res.json({
    success: true,
    message: "Skill created successfully",
    skill,
  });
});

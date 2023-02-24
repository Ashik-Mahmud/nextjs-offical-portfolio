import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Skill from "@/models/skillModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const { name, level, category } = req.body;

    const isHasSkill = await Skill.findOne({ name, user: req.userId });

    if (isHasSkill) {
      return res.status(400).json({
        success: false,
        message: "You already have this skill",
      });
    }

    const skill = await Skill.create({
      name,
      level,
      category,
      user: req.userId,
    });
    res.json({
      success: true,
      message: "Skill created successfully",
      skill,
    });
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
});

export default connectDB(apiRoute);

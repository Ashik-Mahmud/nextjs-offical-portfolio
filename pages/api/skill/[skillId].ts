import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Skill from "@/models/skillModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.put(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const { skillId, type } = req.query;
    const userId = req.userId;

    const skill = await Skill.findOne({ user: userId, _id: skillId });
    if (!skill) {
      return res.status(404).send({
        success: false,
        message: "Skill does not exist",
      });
    }

    if (type === "delete") {
      await skill.remove();
      res.status(202).send({
        success: true,
        message: "successfully deleted skill",
      });
    } else {
      const updateSkill = await Skill.findOneAndUpdate(
        { _id: skillId, user: userId },
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      res.status(202).send({
        success: true,
        message: "update skill successfully done",
        skill: updateSkill,
      });
    }
  } catch (err: any) {
    console.log(err);
    res.json({ message: err?.message });
  }
});

export default connectDB(apiRoute);

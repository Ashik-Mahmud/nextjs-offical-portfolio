import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Skill from "@/models/skillModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.put(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const { update } = req.query;
    const userId = req.userId;

    const skill = await Skill.findOne({ user: userId, _id: update });
    if (!skill) {
      return res.status(404).send({
        success: false,
        message: "Skill does not exist",
      });
    }

    const updateSkill = await Skill.findOneAndUpdate(
      { _id: update, user: userId },
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
  } catch (err: any) {
    console.log(err);
    res.json({ message: err?.message });
  }
});

export default connectDB(apiRoute);

import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Skill from "@/models/skillModel";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.delete(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const skill = await Skill.findOne({
      user: req.userId,
      _id: req.query.delete,
    });
    if (!skill)
      return res.status(404).send({
        success: false,
        message: "skill does not found",
      });

    await skill.remove();
    res.status(202).send({
      success: true,
      message: "successfully deleted skill",
    });
  } catch (err: any) {
    res.status(501).send({
      success: false,
      message: "internal error" + err?.message,
    });
  }
});

export default connectDB(apiRoute);

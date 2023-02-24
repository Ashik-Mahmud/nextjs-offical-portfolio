import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Achievement from "@/models/achievementModel";
import apiRoute from "@/utils/apiRoute";
import { deleteImage } from "@/utils/cloudinary";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const { achievementId, type } = req.query;
  const userId = req.userId;

  try {
    const achievement = await Achievement.findOne({
      user: userId,
      _id: achievementId,
    });

    if (!achievement) {
      return res.status(404).send({
        success: false,
        message: "achievement does not exist",
      });
    }

    if (type === "delete") {
      await deleteImage(achievement?.image?.public_id, "achievements");
      await Achievement.remove();
      res.status(202).send({
        success: true,
        message: "Achievement successfully deleted",
      });
    } else {
      const updateAchievement = await Achievement.findOneAndUpdate(
        { _id: achievementId, user: userId },
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      res.status(202).send({
        success: true,
        message: "update achievementId successfully done",
        achievements: updateAchievement,
      });
    }
  } catch (err: any) {
    res.status(404).send({
      success: false,
      message: "internal server problem" + err?.message,
    });
  }
});
export default connectDB(apiRoute);

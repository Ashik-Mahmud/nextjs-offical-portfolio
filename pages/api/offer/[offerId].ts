import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Offer from "@/models/offerMode";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const { offerId, type } = req.query;
  const userId = req.userId;

  try {
    const offer = await Offer.findOne({
      user: userId,
      _id: offerId,
    });

    if (!offer) {
      return res.status(404).send({
        success: false,
        message: "Offer does not exist",
      });
    }

    if (type === "delete") {
      await offer.remove();
      res.status(202).send({
        success: true,
        message: "Offer successfully deleted",
      });
    } else {
      const updateOffer = await Offer.findOneAndUpdate(
        { _id: offerId, user: userId },
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      res.status(202).send({
        success: true,
        message: "update offer successfully done",
        skill: updateOffer,
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

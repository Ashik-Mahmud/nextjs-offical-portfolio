import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Offer from "@/models/offerMode";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {
  try {
    const { title, description } = req.body;
    const newOffer = {
      user: req.userId,
      title,
      description,
    };

    const hasOffer = await Offer.findOne({ title, user: req.userId });
    if (hasOffer) {
      return res.status(400).json({ err: "You already have this offer" });
    }
    const offer = await Offer.create(newOffer);
    res.status(200).json({ message: "create new offer", data: offer });
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
});
export default connectDB(apiRoute);

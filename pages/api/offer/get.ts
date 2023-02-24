import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Offer from "@/models/offerMode";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const offers = await Offer.find({ user: req.userId });
  const total = await Offer.countDocuments({ user: req.userId });
  res.status(202).send({
    success: true,
    message: "get all the offer ",
    data: {
      offers,
      total: total,
    },
  });
});
export default connectDB(apiRoute);

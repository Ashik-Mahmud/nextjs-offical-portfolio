import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Portfolio from "@/models/portfolioModel";

import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const portfolios = await Portfolio.find({ user: req.userId });
  const total = await Portfolio.countDocuments({ user: req.userId });
  res.status(202).send({
    success: true,
    message: "get all the offer ",
    data: {
      portfolios,
      total: total,
    },
  });
});
export default connectDB(apiRoute);

import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import Portfolio from "@/models/portfolioModel";
import apiRoute from "@/utils/apiRoute";
import { deleteImage } from "@/utils/cloudinary";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.get(async (req: NextApiRequest | any, res: NextApiResponse) => {
  const { portfolioId, type } = req.query;
  const userId = req.userId;

  try {
    const portfolio = await Portfolio.findOne({
      user: userId,
      _id: portfolioId,
    });

    if (!portfolio) {
      return res.status(404).send({
        success: false,
        message: "portfolio does not exist",
      });
    }

    if (type === "delete") {
      await deleteImage(portfolio?.image?.public_id, "portfolios");
      await portfolio.remove();
      res.status(202).send({
        success: true,
        message: "Offer successfully deleted",
      });
    } else {
      const updatePortfolio = await Portfolio.findOneAndUpdate(
        { _id: portfolioId, user: userId },
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      res.status(202).send({
        success: true,
        message: "update portfolio successfully done",
        portfolio: updatePortfolio,
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

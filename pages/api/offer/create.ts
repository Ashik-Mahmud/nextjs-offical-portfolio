import connectDB from "@/middlewares/connectDB";
import VerifyToken from "@/middlewares/VerifyToken";
import apiRoute from "@/utils/apiRoute";
import { NextApiRequest, NextApiResponse } from "next";

apiRoute.use(VerifyToken);
apiRoute.post(async (req: NextApiRequest | any, res: NextApiResponse) => {});
export default connectDB(apiRoute);

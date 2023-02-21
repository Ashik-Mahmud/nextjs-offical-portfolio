import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
const VerifyToken = async (req: NextApiRequest | any, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(404).send({
      success: false,
      message: `undefined token`,
    });
  }
  jwt.verify(
    token,
    process.env.JWT_SECRET as any,
    function (err: any, decoded: any) {
      req.user = decoded;
      if (err) {
        return res.status(404).send({
          success: false,
          message: `Unauthorized access`,
          err,
        });
      }
    }
  );
};
export default VerifyToken;

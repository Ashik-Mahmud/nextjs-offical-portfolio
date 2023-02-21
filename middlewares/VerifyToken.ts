import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const VerifyToken = (
  req: NextApiRequest | any,
  res: NextApiResponse,
  next: any
) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ auth: false, message: "No token provided." });
  }
  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    function (err, decoded: any) {
      if (err) {
        return res
          .status(500)
          .json({ auth: false, message: "Failed to authenticate token." });
      }
      req.userId = decoded.id;

      next();
    }
  ) as any;
};

export default VerifyToken;

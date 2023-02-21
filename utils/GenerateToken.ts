import jwt from "jsonwebtoken";

const GenerateToken = async (id: String) => {
  const token = await jwt.sign(
    {
      id: id,
    },
    process.env.JWT_SECRET as any,
    {
      expiresIn: "2hr",
    }
  );
  return token;
};

export default GenerateToken;

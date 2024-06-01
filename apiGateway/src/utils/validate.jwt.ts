import { Request, Response, NextFunction } from "express";
import TokenHelper from "./token.helper";

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Authorization header not found" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token not found" });

  try {
    const decoded = TokenHelper.verifyToken(token);
    res.locals.user = decoded;
  } catch (error: any) {
    return res.status(401).json({ message: `Invalid token: ${error.message}` });
  }

  next();
};

export default validateJWT;
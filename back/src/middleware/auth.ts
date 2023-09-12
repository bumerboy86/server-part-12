import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`);
    (req as CustomRequest).token = decoded;
    req.body = { ...req.body, token: decoded };
    next();
  } catch (error: unknown) {
    const err = {
      message: "Пожалуйста авторизуйтесь",
    };
    res.status(401).send(err);
  }
};

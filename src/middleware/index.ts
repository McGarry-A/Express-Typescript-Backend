import User from "../user/user.model";
import { Request, Response, NextFunction } from "express";
import UserAuthInterface from "../user/user.interfaces";

export const tokenAuth = () => {};
export const hashPassword = () => {};
export const comparePasswords = async (req: UserAuthInterface, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(user)
    if (req.body.password === user?.password) {
      req.user = user as object;
      next();
    }
  } catch (error) {
      console.log(error)
      res.sendStatus(401).send({message: 'incorrect login details'})
  }
};

export const corsSetHeaders = (req: Request, res: Response, next: NextFunction): void => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
}
import User from "../user/user.model";
import { Request, Response } from "express";

export const tokenAuth = () => {};
export const hashPassword = () => {};
export const comparePasswords = async (req: Request, res: Response, next: Function): Promise<void> => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (req.body.pass === user?.password) {
      req.user = user;
      next();
    }
  } catch (error) {
      console.log(error)
      res.sendStatus(401).send({message: 'incorrect login details'})
  }
};

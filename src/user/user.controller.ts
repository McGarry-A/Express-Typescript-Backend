import User from "./user.model";
import { Request, Response } from "express";
import UserAuthInterface from "./user.interfaces";

// Good
export const addUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(req.body);
    res.status(200).send({ message: "success", newUser });
  } catch (e) {
    console.log(e);
    res.status(418).send({ message: "error adding user" });
  }
};

// Good
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).send({ message: "success", users });
  } catch (e) {
    console.log(e);
    res.status(418).send({ message: "error getting users" });
  }
};

// Needs more work
export const updateUser = async (req: Request, res: Response) => {
  try {
    const filter = { email: req.body.email };
    const update = { newEmail: req.body.newEmail };
    const updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).send({ message: "success", updatedUser });
  } catch (e) {
    console.log(e);
    res.status(418).send({ message: "error updating users" });
  }
};

// Needs more work
export const login = async (req: UserAuthInterface, res: Response) => {
  try {
    res.status(200).send({ user: req.user });
  } catch (e) {
    console.log(e);
    res.status(401).send({ message: "error logging in" });
  }
};

import User from "./user.model";
import { Request, Response } from "express";
import UserAuthInterface from "./user.interfaces";

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

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await User.find({});
    res.status(200).send({ message: "success", users });
  } catch (e) {
    console.log(e);
    res.status(418).send({ message: "error getting users" });
  }
};

export const login = async (req: UserAuthInterface, res: Response) => {
  try {
    res.status(200).send({ message: "success", user: req.user });
  } catch (e) {
    console.log(e);
    res.status(401).send({ message: "error logging in" });
  }
};

export const updateBasket = async (req: Request, res: Response) => {
  try {
    const filter = { username: req.body.username };
    const update = { basket: req.body.basket };
    const updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).send({ message: "success", updatedUser });
  } catch (error) {
    console.log(error);
  }
};

// Needs more work
// Not in use at the moment
export const updateUser = async (req: Request, res: Response) => {
  try {
    const filter = { email: req.body.email };
    const update = { email: req.body.newEmail };
    const updatedUser = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).send({ message: "success", updatedUser });
  } catch (e) {
    console.log(e);
    res.status(418).send({ message: "error updating users" });
  }
};

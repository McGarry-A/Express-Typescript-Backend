import User from "./user.model";
import { Request, Response } from "express";

export const addUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const newUser = new User({
      name: "Ahmed",
      address: "home",
      email: "atomcgarry@gmail.com",
      password: "test123",
    });
    // await newUser.save();
    console.log(req.body)
    res.sendStatus(200).send({ message: "success", newUser });
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const filter = {};
    const users = await User.find(filter);
    res.sendStatus(200).send({ message: "success", users });
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { newUser: req.body.newUser }
    );
  } catch (e) {
    console.log(e);
  }
};

// export const login = async (req: userAuthReqest, res: Response) => {
//   try {
    // Error here
    // res.sendStatus(200).send({ user: req.user });
//   } catch (e) {
//     console.log(e);
//   }
// };

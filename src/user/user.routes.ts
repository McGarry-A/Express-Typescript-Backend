import { Router } from "express";
import { comparePasswords, corsSetHeaders } from "../middleware";
import { addUser, getUsers, login, updateBasket, updateUser } from "./user.controller";

const userRouter = Router();

userRouter.get("/user", getUsers); // get all user info
userRouter.get("/token"); // give user a token

userRouter.post("/user", addUser); // add user here
userRouter.post("/login", corsSetHeaders, comparePasswords, login); // check user info is correct and login
userRouter.post("/basket", updateBasket) //save basket to DB on logout

userRouter.put("/user", updateUser); // update any user informaiton

export default userRouter
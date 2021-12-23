import { Router } from "express";

const userRouter = Router();

userRouter.get("/user"); // get user login info
userRouter.get("/token"); // give user a token

userRouter.post("/user"); // add user here
userRouter.post("/login"); // check user info is correct and login

userRouter.put("/user"); // update any user informaiton


// methods needed
// > hashpassword and add user
// > comparePasswords and log in
// > tokenAuth and login
// > get users
// > update user

export default userRouter
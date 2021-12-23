import User from './user.model'
import {Request, Response } from 'express'

interface userAuthReqest extends Request {
    user: object
}

export const addUser = async (req: Request, res: Response):Promise<any> => {
    const newUser = new User({name: "Ahmed", address: "home", email:"atomcgarry@gmail.com", password: "test123"})
    await newUser.save();
    res.sendStatus(200).send({message: "success", newUser})
}

export const getUsers = async (req: Request, res: Response) => {
    const filter = {}
    const users = await User.find(filter)
    res.sendStatus(200).send({message: "success", users})
}

export const updateUser = async (req: Request, res: Response) => {
    const updateUser = await User.findOneAndUpdate(
        {username: req.body.username},
        {newUser: req.body.newUser}
    )
}

export const login = async (req: userAuthReqest, res: Response) => {
    res.sendStatus(200).send({user: req.user})
}


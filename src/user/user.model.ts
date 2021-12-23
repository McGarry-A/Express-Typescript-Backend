import { model, Schema } from "mongoose";

interface User {
    name: string;
    email: string;
    password: string;
    address: string;
}

const schema = new Schema<User>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {tupe: String, required: true}
})

const UserModel = model<User>('User', schema);
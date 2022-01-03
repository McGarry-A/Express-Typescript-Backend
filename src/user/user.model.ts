import { model, Schema } from "mongoose";

interface User {
  username: string;
  email: string;
  password: string;
  basket: Array<object>;
}

const schema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  basket: Array
});

const UserModel = model<User>("User", schema);

export default UserModel;

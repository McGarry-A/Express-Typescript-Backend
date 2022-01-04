import { connect } from "mongoose";
require("dotenv").config();

const connection = async (): Promise<void> => {
  try {
    await connect(process.env.MONGO_URI as string);
    console.log("Connected");
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

connection();

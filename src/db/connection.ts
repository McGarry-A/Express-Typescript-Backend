import { connect } from "mongoose";

const connection = async (): Promise<void> => {
  try {
    await connect(
      "mongodb+srv://ahmedmcgarry:test123@babajohns.xspjn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("Connected");
    return;
  } catch (error) {
    console.log(error);
    return;
  }
};

connection();

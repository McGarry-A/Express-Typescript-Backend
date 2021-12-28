import "../src/db/connection"
import express from "express";
import userRouter from "./user/user.routes";
const cors = require("cors")

const app = express();
app.use(express.json()) // Allows us to pass JSO N bodys in post request.
app.use(userRouter)

app.listen(3000, () => {
  console.log("application listening at http://localhost:3000");
});
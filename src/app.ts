import express, {Request, Response} from "express";

const app = express();
app.use(express.json()) // Allows us to pass JSO N bodys in post request.

app.route('/')
.get((req: Request, res: Response) => {
  return res.json({
      success: true,
      name: "Ahmed is a baws"
  })
})
.post((req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
})
// All basically means that we can make all types of req, like get post put etc
.all((req: Request, res: Response) => {
    return res.sendStatus(200);
})

app.listen(3000, () => {
  console.log("application listening at http://localhost:3000");
});

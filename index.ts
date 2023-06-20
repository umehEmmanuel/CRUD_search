import express, { Application, Request, Response } from "express";
import cores from "cors";
import mongoose from "./Config/db"
import router from "./Router/authorRouter"

const app: Application = express();

const port: number = 2999;

mongoose;

app.use("/api", router)


app
  .use(express.json())
  .use(cores())

  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit on a book-store default get endpoint",
      });
    } catch (error) {
      console.log(error);
    }
  });

app.listen(port, () => {
  console.log("server is listening", port);
});

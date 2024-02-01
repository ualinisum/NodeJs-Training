import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import { AppDataSource } from "./config/db";
import bookRoute from "./routes/book";

const app: Application = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connect successfully initialized");

    app.listen(8000, () => {
      console.log("listening");
    });
  })
  .catch((error): any => console.log(error));

app.get("/", (req: Request, res: Response) => {
  res.send("Responce");
});

app.use("/api", bookRoute);

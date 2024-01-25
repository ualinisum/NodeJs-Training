import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import { AppDataSource } from "./config/db";
import bookRoute from "./routes/book";

const app: Application = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connect successfully initialized");

    app.listen(5000, () => {
      console.log("listening");
    });
  })
  .catch((error): any => console.log(error));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!111");
});

app.use("/api", bookRoute);

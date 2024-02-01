import express from "express";
import mongoConnection from "./config/db";
import blogRouter from "./routes/blog.routes";

const app = express();

app.use(express.json());
app.use("/api", blogRouter);

mongoConnection((result) => {
  app.listen(3000, () => {
    console.log(`${result} Server Start`);
  });
});

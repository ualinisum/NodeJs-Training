import express from "express";
import cluster from "cluster";
import os, { availableParallelism } from "os";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Thank You ${process.pid}`);
});

app.get("/posts", (req, res) => {
  res.send(`Post`);
});

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

  console.log(`Worker ${process.pid} started`);
}

export default app;

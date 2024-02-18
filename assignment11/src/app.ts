import express from "express";
import { consumeEmail } from "./consumer";
import { emailNotification } from "./producer";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/comment", (req, res) => {
  const comment = req.body;
  emailNotification(comment);
  res.send("Comment added successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  consumeEmail();
});

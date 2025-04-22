import express from "express";
import { connectDB } from "./db/connectDB";

const app = express();
const port = 1000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, async () => {
  await connectDB();
  console.log("Server is listening....");
});

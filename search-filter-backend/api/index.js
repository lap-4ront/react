import cors from "cors";
import express from "express";
import { Users } from "./users.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json(Users);
});

app.listen(5000, console.log("Server is running..."));

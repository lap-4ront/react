import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hello, world");
});

app.listen(5000, console.log("Server is running..."));

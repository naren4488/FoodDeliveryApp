import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const PORT = 8000;

// create new server using express & assign to app variable
const app = express();

// to convert all request bodies into json format
app.use(express.json());

// to manage security for calls -------- check docs once
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hello this is test route" });
});

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("connected to mongoDB"));
// start server
app.listen(PORT, () => {
  console.log("app is listening at port:", PORT);
});

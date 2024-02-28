import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoutes from "./routes/myUser.route";

const PORT = 8000;

// create new server using express & assign to app variable
const app = express();

// to convert all request bodies into json format
app.use(express.json());

// to manage security for calls -------- check docs once
app.use(cors());

// api endpoint at /health to check if backend is successfully running
app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "Health ok!" });
});

app.use("/api/my/user", myUserRoutes);

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("connected to mongoDB"));
// start server
app.listen(PORT, () => {
  console.log("app is listening at port:", PORT);
});

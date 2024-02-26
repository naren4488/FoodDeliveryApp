import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

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

// start server
app.listen(PORT, () => {
  console.log("app is listening at port:", PORT);
});

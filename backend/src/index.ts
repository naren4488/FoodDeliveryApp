import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUser.route";
import myRestaurantRoute from "./routes/MyRestaurant.route";
import restaurantRoute from "./routes/Restaurant.route";
import orderRoute from "./routes/OrderRoute";
import { v2 as cloudinary } from "cloudinary";

// connect to database
mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("connected to mongoDB"));

// setup cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUT_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = 8000;

// create new server using express & assign to app variable
const app = express();

// to manage security for calls -------- check docs once
app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));

// to convert all request bodies into json format
app.use(express.json());

// api endpoint at /health to check if backend is successfully running
app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "Health ok!" });
});

// MyUserRoute api -> /api/my/user
app.use("/api/my/user", myUserRoute);

// MyRestaurantRoute api -> /api/my/restaurant
app.use("/api/my/restaurant", myRestaurantRoute);

// RestaurantRoute api -> /api/restaurant
app.use("/api/restaurant", restaurantRoute);

// OrderRoute api -> /
app.use("/api/order", orderRoute);

// start server
app.listen(PORT, () => {
  console.log("app is listening at port:", PORT);
});

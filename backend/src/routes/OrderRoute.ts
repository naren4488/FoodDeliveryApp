import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import OrderController from "../controllers/Order.controller";

const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);

export default router;

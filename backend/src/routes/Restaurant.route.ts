import express from "express";
import myUserController from "../controllers/MyUser.controller";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import { param } from "express-validator";
import RestaurantController from "../controllers/Restaurant.controller";

const router = express.Router();
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  RestaurantController.searchRestaurants
);

export default router;

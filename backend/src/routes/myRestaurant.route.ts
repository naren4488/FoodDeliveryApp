import express from "express";
import multer from "multer";
import myRestaurantController from "../controllers/myRestaurant.controller";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

// api/my/restaurant
router.post(
  "/",
  validateMyRestaurantRequest,
  upload.single("imageFile"),
  jwtCheck,
  jwtParse,
  myRestaurantController.createMyRestaurant
);

export default router;

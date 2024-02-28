import express from "express";
import myUserController from "../controllers/myUser.controller";
import { jwtCheck, jwtPaser } from "../middleware/auth.middleware";
import { validateMyUserRequest } from "../middleware/validation";

const router = express();

router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtPaser,
  validateMyUserRequest,
  myUserController.updateCurrentUser
);

export default router;

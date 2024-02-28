import express from "express";
import myUserController from "../controllers/myUser.controller";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import { validateMyUserRequest } from "../middleware/validation";

const router = express();

router.get("/", jwtCheck, jwtParse, myUserController.getCurrentUser);
router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  myUserController.updateCurrentUser
);

export default router;

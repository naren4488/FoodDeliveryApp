import express from "express";
import myUserController from "../controllers/myUser.controller";
import { jwtCheck } from "../middleware/auth.middleware";

const router = express();

router.post("/", jwtCheck, myUserController.createCurrentUser);

export default router;

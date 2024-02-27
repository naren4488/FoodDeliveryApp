import express from "express";
import myUserController from "../controllers/myUser.controller";

const router = express();

router.post("/", myUserController.createCurrentUser);

export default router;

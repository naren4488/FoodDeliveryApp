"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myUser_controller_1 = __importDefault(require("../controllers/myUser.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const validation_1 = require("../middleware/validation");
const router = (0, express_1.default)();
router.get("/", auth_middleware_1.jwtCheck, auth_middleware_1.jwtParse, myUser_controller_1.default.getCurrentUser);
router.post("/", auth_middleware_1.jwtCheck, myUser_controller_1.default.createCurrentUser);
router.put("/", auth_middleware_1.jwtCheck, auth_middleware_1.jwtParse, validation_1.validateMyUserRequest, myUser_controller_1.default.updateCurrentUser);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const myUser_route_1 = __importDefault(require("./routes/myUser.route"));
const PORT = 8000;
// create new server using express & assign to app variable
const app = (0, express_1.default)();
// to convert all request bodies into json format
app.use(express_1.default.json());
// to manage security for calls -------- check docs once
app.use((0, cors_1.default)());
// api endpoint at /health to check if backend is successfully running
app.get("/health", (req, res) => {
    res.send({ message: "Health ok!" });
});
app.use("/api/my/user", myUser_route_1.default);
mongoose_1.default
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to mongoDB"));
// start server
app.listen(PORT, () => {
    console.log("app is listening at port:", PORT);
});

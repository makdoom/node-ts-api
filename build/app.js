"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("./middlewares/morgan"));
const app = (0, express_1.default)();
app.use(morgan_1.default);
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true, limit: "16kb" }));
app.use(express_1.default.json());
app.get("/", (_, res) => res.send("✅ It is really working !"));
app.post("/test", (req, res) => {
    const body = req.body;
    res.json({ success: 1, body });
});
exports.default = app;
//# sourceMappingURL=app.js.map
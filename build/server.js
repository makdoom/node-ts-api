"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
app_1.default.listen(PORT, () => {
    logger_1.default.info(`Server up and running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
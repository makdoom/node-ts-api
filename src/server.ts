import dotenv from "dotenv";
import app from "./app";
import Logger from "./logger";

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  Logger.info(`Server up and running at http://localhost:${PORT}`);
});

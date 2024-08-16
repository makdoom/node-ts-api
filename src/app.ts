import express from "express";
import cors from "cors";
import morganMiddleware from "./middlewares/morgan";

const app = express();

app.use(morganMiddleware);
app.use(cors());

app.get("/", (_, res) => res.send("✅ It is really working !"));

export default app;

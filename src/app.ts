import express from "express";
import cors from "cors";
import morganMiddleware from "./middlewares/morgan";

const app = express();

app.use(morganMiddleware);
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());

app.get("/", (_, res) => res.send("✅ It is really working !"));

app.post("/test", (req, res) => {
  const body = req.body;
  res.json({ success: 1, body });
});

export default app;

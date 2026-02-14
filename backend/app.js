import "./config/env.js";
import express from "express";
import cors from "cors";

import profileRoutes from "./routes/profile.routes.js";
import recommendationRoutes from "./routes/recommendations.routes.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8080"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/health", (_, res) => {
  res.send("OK");
});

app.use("/profile", profileRoutes);
app.use("/recommendations", recommendationRoutes);

export default app;

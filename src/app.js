
import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
import ApiResponse from "./utils/ApiResponse.js";
import authRoutes from "./routes/auth.routes.js";
import logger from "./utils/logger.js";
import logMiddleware from "./middlewares/log.middleware.js";
app.use(cors());
app.use(logMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "Welcome to the API"));
});
app.use("/api/v1/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
export default app;

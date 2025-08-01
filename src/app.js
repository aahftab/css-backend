import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ApiResponse from "./utils/ApiResponse.js";
import authRoutes from "./routes/auth.routes.js";
import logMiddleware from "./middlewares/log.middleware.js";

const app = express();
app.use(cors({ origin: process.env.NODE_ENV === "production" ? process.env.PROD_CORS_ORIGIN : ["http://172.20.10.2:5173", "http://223.184.174.74", "https://css-frontend-2025.vercel.app"], credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "Welcome to the API"));
});

app.use("/api/v1/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(new ApiResponse(500, {}, "Something went wrong!"));
});
export default app;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logMiddleware from "./middlewares/log.middleware.js";
import ApiResponse from "./utils/ApiResponse.js";
import authRoutes from "./routes/auth.routes.js";
import sessionMiddleware from "./middlewares/session.middleware.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors({ 
  origin: process.env.NODE_ENV === "production" 
    ? process.env.PROD_CORS_ORIGIN 
    : [
        "http://localhost:5173", 
        "http://172.20.10.4:5173", 
        "http://223.184.174.74", 
        "https://css-frontend-2025.vercel.app",
        "https://affy.live",
      ], 
  credentials: true 
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(logMiddleware);

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "Welcome to the API"));
});

app.use("/api/v1/auth", authRoutes);
app.use(sessionMiddleware)
app.use("/api/v1/user", userRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(new ApiResponse(500, {}, "Something went wrong!"));
});
export default app;


import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
import ApiResponse from "./utils/ApiResponse.js";
import authMiddleware from "./middlewares/authMiddleware.js";
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.get("/", (req, res) => {
  res.json(new ApiResponse(200, null, "Welcome to the API"));
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
export default app;

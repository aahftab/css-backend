import express from "express";
import ApiError from "../utils/ApiError.js";
const router = express.Router();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")){
    return res.json(new ApiError(401, "Unauthorized Access"));
  }
  next();
};

export default authMiddleware;
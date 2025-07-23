
import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./models/index.js";
const app = express();
const { User } = db;
// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      
        });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ message: "Users not found" });
    }
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
export default app;

import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
import sequelize from "./config/db.config.js";
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
// connect to database using sequelize
import "dotenv/config";
console.log(process.env.DB_USER);
import db from "./src/models/index.js";
db.User.findAll()
  .then(users => {
    console.log("Users:", users);
  })
  .catch(err => {
    console.error("Error fetching users:", err);
  });
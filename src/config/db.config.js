import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const DB_DEVELOPMENT_DATABASE = process.env.DB_DEVELOPMENT_DATABASE;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASS = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DIALECT = process.env.DB_DIALECT;

const sequelize = new Sequelize(DB_DEVELOPMENT_DATABASE, DB_USERNAME, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

export default sequelize;
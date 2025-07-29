// import dotenv from "dotenv";
// dotenv.config({ path: "../.env" });

export default {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEVELOPMENT_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      underscored: true,
      timestamps: true,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      underscored: true,
      timestamps: true,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PRODUCTION_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      underscored: true,
      timestamps: true,
    },
  },
};

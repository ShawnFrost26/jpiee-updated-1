// src/config/sequelize.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

console.log(
  `Connecting to database at ${process.env.DB_HOST}:${process.env.PORT}...`
);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    timezone: "+05:30",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;

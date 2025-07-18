const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

//notes

//init middleware
app.use(morgan("dev")); //logs
app.use(helmet()); //private technology
app.use(compression());

//init database
require("./databases/init.mongodb");
// ==> check overload
// const { checkOverLoad } = require("./helpers/check.connect");
// checkOverLoad();

//init routes
app.get("/", (req, res, next) => {
  // const strCompression = "Test compression performance";
  return res.status(200).json({
    message: "Test Middleware",
    // metadata: strCompression.repeat(20000),
  });
});

//handle error

module.exports = app;

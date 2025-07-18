const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

//init middleware
app.use(morgan("dev")); //logs
app.use(helmet()); //private technology
app.use(compression);

//init database

//init routes
app.get("/", (req, res, next) => {
  const strCompression = "Test compression performance";
  return res.status(200).json({
    message: "Test Middleware",
    metadata: strCompression.repeat(20000),
  });
});

//handle error

module.exports = app;

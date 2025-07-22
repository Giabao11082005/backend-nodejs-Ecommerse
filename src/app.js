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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init database
require("./databases/init.mongodb");
// ==> check overload
// const { checkOverLoad } = require("./helpers/check.connect");
// checkOverLoad();

//init routes
app.use("", require("./routes"));
//handle error

module.exports = app;

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECOND = 5000; //time check over load

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

//check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //example maximum number of connections based number of cores
    const maxConnections = numCores * 5;

    console.log(`Active connections:: ${numConnection}`);
    console.log(`Memory usage::${memoryUsage / 1024 / 1024} Mb`);
    if (numConnection > maxConnections) {
      console.log("Connection overload detected");
    }
  }, _SECOND);
};

module.exports = { countConnect, checkOverLoad };

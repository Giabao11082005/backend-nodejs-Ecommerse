const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/shopDev";
const { countConnect } = require("../helpers/check.connect"); //count connect

class Database {
  constructor() {
    this.connect();
  }

  //connect new
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log("Connect Mongodb Success", countConnect()); //count connect
      })
      .catch((error) => {
        console.log("Error Connect", error);
      });
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;

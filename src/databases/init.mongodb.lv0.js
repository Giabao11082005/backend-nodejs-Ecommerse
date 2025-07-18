const mongoose = require("mongoose");

const connectString = "mongodb://localhost:27021/shopDev";
mongoose
  .connect(connectString)
  .then((_) => {
    console.log(`Connect Mongodb Success`);
  })
  .catch((error) => {
    console.log(`Error Connect`, error);
  });

if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;

const mongoose = require("mongoose");
const chalk = require("chalk");

const url =
  process.env.MONGODB_URI ||
  // @ts-ignore
  global.MONGODB_URI ||
  "mongodb://192.168.99.100:27017/weather";

const options = {
  connectTimeoutMS: 5000,
  reconnectInterval: 100,
  useCreateIndex: true,
  useNewUrlParser: true
};
mongoose.set("useFindAndModify", false); // node:10736 - deprecatingWarning
mongoose.connect(url, options);
const db = mongoose.connection;

// @ts-ignore
db.on("once", () => console.log(chalk`{green Mongo connection opened}`));
// @ts-ignore
db.on("error", err => console.log(chalk`{red Mongo connection issue\n${err}}`));

module.exports = db;

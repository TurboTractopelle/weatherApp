const mongoose = require("mongoose");
const chalk = require("chalk");

const url = "mongodb://192.168.99.100:27017/weather";
const options = {
	connectTimeoutMS: 5000,
	reconnectInterval: 100,
	useCreateIndex: true,
	useNewUrlParser: true
};

mongoose.connect(url, options);
const db = mongoose.connection;

// @ts-ignore
db.on("open", () => console.log(chalk`{green Mongo connection opened}`));
// @ts-ignore
db.on("error", () => console.log(chalk`{red Mongo connection issue}`));

module.exports = db;
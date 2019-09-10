const mongoose = require("mongoose");
const connection = require("../db/connection");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true }
});

const User = connection.model("user", userSchema);

module.exports = User;

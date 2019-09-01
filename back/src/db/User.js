const mongoose = require("mongoose");
const connection = require("../db/connection");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true }
});

const User = connection.model("user", userSchema);

module.exports = User;

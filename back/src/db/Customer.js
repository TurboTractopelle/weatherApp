const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const connection = require("./connection");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  balance: { type: String, default: 0 }
});

// add at, created at automaticaly
customerSchema.plugin(timestamp);

const Customer = connection.model("customer", customerSchema);

module.exports = Customer;

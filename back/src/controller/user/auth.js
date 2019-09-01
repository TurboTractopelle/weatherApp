const User = require("../../db/User");
const errors = require("restify-errors");
const bcrypt = require("bcryptjs");
const util = require("util");

async function auth(req, res, next) {
  res.send("auth");
  next();
}

module.exports = auth;

const User = require("../db/User");
const errors = require("restify-errors");
const bcrypt = require("bcryptjs");
const util = require("util");

function setupUserRoutes(server) {
  console.log("setting up user routes");

  server.post("/register", register);

  async function register(req, res, next) {
    const { email, password } = req.body;

    if (!req.is("application/json")) {
      res.send(new errors.InvalidContentError("this is not json"));
      return next();
    }

    const genSaltProm = util.promisify(bcrypt.genSalt);
    const hashProm = util.promisify(bcrypt.hash);

    let salt, passwordHashed;

    try {
      salt = await genSaltProm(10);
      passwordHashed = await hashProm(password, salt);
    } catch (error) {
      res.send(error);
      return next();
    }

    try {
      const user = await User.create({ email, password: passwordHashed });
      res.send(200, user);
      next();
    } catch (error) {
      res.send(error);
      next();
    }
  }

  return server;
}

module.exports = setupUserRoutes;

const User = require("../../db/User");
const errors = require("restify-errors");
const bcrypt = require("bcryptjs");
const util = require("util");

async function auth(email, password) {
  try {
    const user = await User.findOne({ email });

    if (user == null) {
      throw new errors.ResourceNotFoundError("no user found with this email");
    }

    const compareProm = util.promisify(bcrypt.compare);
    // @ts-ignore
    const legitPassword = await compareProm(password, user.password);

    if (!legitPassword) {
      throw new errors.UnauthorizedError("bad password");
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = auth;

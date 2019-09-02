const User = require("../../db/User");
const errors = require("restify-errors");
const bcrypt = require("bcryptjs");
const util = require("util");

async function register(req, res, next) {
	console.log("req.body", req.body);
	if (req.body === undefined) {
		res.send(new errors.BadDigestError("email and password!"));
		return next();
	}

	if (req.body.email === undefined) {
		res.send(new errors.BadDigestError("email!"));
		return next();
	}
	const { email, password } = req.body;

	console.log(req.headers);

	if (!req.is("application/json")) {
		res.send(new errors.InvalidContentError("this is not json"));
		return next();
	}

	const genSaltProm = util.promisify(bcrypt.genSalt);
	const hashProm = util.promisify(bcrypt.hash);

	let salt, passwordHashed;

	try {
		// @ts-ignore
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

module.exports = register;

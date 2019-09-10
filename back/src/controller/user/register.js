const User = require("../../db/User");
const errors = require("restify-errors");
const bcrypt = require("bcryptjs");
const util = require("util");

async function register(req, res, next) {
	if (req.body === undefined) {
		res.send(new errors.BadDigestError("email and password!"));
		return next();
	}

	if (req.body.email === undefined) {
		res.send(new errors.BadDigestError("email!"));
		return next();
	}

	if (req.body.password === undefined) {
		res.send(new errors.BadDigestError("password!"));
		return next();
	}

	const { email, password } = req.body;

	if (!req.is("application/json")) {
		res.send(new errors.InvalidContentError("this is not json"));
		return next();
	}

	// check if email is not currently used
	const validUser = await User.find({ email });
	if (validUser.length !== 0) {
		res.send(new errors.BadDigestError(`Can't create user, ${email} is already used`));
		return next();
	}

	// generate password
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

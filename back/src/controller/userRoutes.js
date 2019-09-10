const register = require("./user/register");
const authenticate = require("./user/auth");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const rjwt = require("restify-jwt-community");

function setupUserRoutes(server) {
	console.log("setting up user routes");

	server.post("/register", register);
	server.post("/auth", auth);
	server.get("/protected", rjwt({ secret: JWT_SECRET }), getProtected);

	function auth(req, res, next) {
		const { email, password } = req.body;

		authenticate(email, password)
			.then(user => {
				// create the token
				const token = jwt.sign(user.toJSON(), JWT_SECRET, { expiresIn: "15m" });
				// @ts-ignore
				const { iat, exp } = jwt.decode(token);

				res.send({ iat, exp, token });
				next();
			})
			.catch(err => {
				res.send(404, err.message);
				next();
			});
	}

	function getProtected(req, res, next) {
		res.send("gg");
		next();
	}

	return server;
}

module.exports = setupUserRoutes;

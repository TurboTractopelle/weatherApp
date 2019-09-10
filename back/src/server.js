const restify = require("restify");
const villeRoutes = require("./controller/villeRoutes");
const customerRoutes = require("./controller/customerRoutes");
const userRoutes = require("./controller/userRoutes");
//const rjwt = require("restify-jwt-community");
//const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @param  {String} name="weather"
 */
function setUpServer(name = "weather") {
	const server = restify.createServer({ name });

	server.pre(restify.plugins.pre.dedupeSlashes());
	server.pre(restify.plugins.pre.sanitizePath());
	server.pre(restify.plugins.pre.strictQueryParams());
	server.pre(restify.plugins.pre.userAgentConnection());

	server.use(restify.plugins.queryParser({ mapParams: false }));
	server.use(restify.plugins.jsonBodyParser());

	/*server.use(
    // @ts-ignore
    rjwt({ secret: JWT_SECRET }).unless({ path: ["/auth", "/register"] })
  );*/

	villeRoutes(server);
	customerRoutes(server);
	userRoutes(server);

	return server;
}

module.exports = setUpServer;

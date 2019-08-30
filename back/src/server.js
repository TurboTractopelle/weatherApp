const restify = require("restify");
const weatherRoutes = require("./controller/weatherRoutes");

function setUpServer(name = "weather") {
	const server = restify.createServer({ name });
	weatherRoutes(server);
	return server;
}

module.exports = setUpServer;

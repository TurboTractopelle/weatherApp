const restify = require("restify");
const villeRoutes = require("./controller/villeRoutes");
const customerRoutes = require("./controller/customerRoutes");

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

  villeRoutes(server);
  customerRoutes(server);

  return server;
}

module.exports = setUpServer;

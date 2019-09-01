const register = require("./user/register");
const auth = require("./user/auth");

function setupUserRoutes(server) {
  console.log("setting up user routes");

  server.post("/register", register);
  server.post("/auth", auth);

  return server;
}

module.exports = setupUserRoutes;

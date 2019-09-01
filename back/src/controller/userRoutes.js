const register = require("./user/register");
const authenticate = require("./user/auth");

function setupUserRoutes(server) {
  console.log("setting up user routes");

  server.post("/register", register);
  server.post("/auth", auth);

  function auth(req, res, next) {
    const { email, password } = req.body;

    authenticate(email, password)
      .then(response => {
        console.log(res);
        res.send(response);
        next();
      })
      .catch(err => {
        res.send(404, err.message);
        next();
      });
  }

  return server;
}

module.exports = setupUserRoutes;

const Customer = require("../db/Customer");
const errors = require("restify-errors");

function setCustomerRoutes(server) {
  server.get("/customers", getCustomers);
  server.get("/customers/coffee", getCoffee);
  server.get("/customers/:name", getCustomerByName);
  server.post("/customers", postCustomers);

  async function getCustomers(req, res, next) {
    const data = await Customer.find({});
    res.send(data);
    next();
  }

  async function getCustomerByName(req, res, next) {
    const { name } = req.params;
    console.log(name);
    const data = await Customer.find({ name });
    res.send(data);
    next();
  }

  async function postCustomers(req, res, next) {
    console.log("posting data");

    // check application type to be json
    if (!req.is("application/json")) {
      res.send(new errors.InvalidContentError("Waiting for JSON"));
      return next();
    }
    console.log(req.headers);
    console.log(req.is("application/json"));

    try {
      const { name, email } = req.body;
      const infoCreation = await Customer.create({ name, email });
      res.send(201, infoCreation);
      next();
    } catch (error) {
      res.send(new errors.InvalidArgumentError(error));
      next();
    }
  }

  function getCoffee(req, res, next) {
    next(new errors.ImATeapotError("no caffein"));
  }
}

module.exports = setCustomerRoutes;

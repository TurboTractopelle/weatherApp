const Customer = require("../db/Customer");
const errors = require("restify-errors");

function setCustomerRoutes(server) {
  server.get("/customers", getCustomers);
  server.get("/customers/coffee", getCoffee);

  async function getCustomers(req, res, next) {
    const data = await Customer.find({});
    res.send(data);
    next();
  }

  function getCoffee(req, res, next) {
    next(new errors.ImATeapotError());
  }
}

module.exports = setCustomerRoutes;

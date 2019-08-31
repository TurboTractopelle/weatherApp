//const Customer = require("../db/Customer");

function setCustomerRoutes(server) {
  server.get("/customers", getCustomers);

  function getCustomers(req, res, next) {
    res.send("customers");
    next();
  }
}

module.exports = setCustomerRoutes;

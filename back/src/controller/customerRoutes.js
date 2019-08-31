const Customer = require("../db/Customer");

function setCustomerRoutes(server) {
  server.get("/customers", getCustomers);

  async function getCustomers(req, res, next) {
    const data = await Customer.find({});
    res.send(data);
    next();
  }
}

module.exports = setCustomerRoutes;

const server = require("../server")();
const request = require("supertest");

describe("customerRoutes", () => {
  it("/customers", () => {
    return request(server)
      .get("/customers")
      .expect(200)
      .then(res => expect(res.body).toBe("customers"));
  });
});

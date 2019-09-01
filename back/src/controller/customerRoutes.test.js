const server = require("../server")();
const request = require("supertest");
const connection = require("../db/connection");
const Customer = require("../db/Customer");

describe("customerRoutes", () => {
  beforeAll(async () => {
    await Customer.deleteMany({});
  });
  afterAll(async () => {
    await connection.close();
  });

  it("returns the test path", () => {
    return request(server)
      .get("/test")
      .expect(200)
      .then(res => expect(res.body).toBe("test"));
  });

  it("return error on error", () => {
    return request(server)
      .get("/customers/coffee")
      .expect(418);
  });

  it("displays the customer list", async () => {
    await Customer.create({ name: "a", email: "a@a.fr" });
    await Customer.create({ name: "b", email: "b@b.fr" });
    await Customer.create({ name: "c", email: "c@c.fr" });
    await Customer.create({ name: "d", email: "d@d.fr" });

    return request(server)
      .get("/customers")
      .expect(200)
      .then(res => {
        expect(res.body.length).toBe(4);
        expect(res.body[0].name).toBe("a");
        expect(res.body[1].name).toBe("b");
      });
  });
});
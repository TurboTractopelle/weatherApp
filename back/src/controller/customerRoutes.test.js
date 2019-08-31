const server = require("../server")();
const request = require("supertest");
const connection = require("../db/connection");
const Customer = require("../db/Customer");

describe("customerRoutes", () => {
  beforeAll(async () => {
    await Customer.deleteMany({});
  });
  afterAll(() => {
    connection.close();
  });

  it("displays the customer list", async () => {
    await Customer.create({ name: "a", email: "a@a.fr" });

    return request(server)
      .get("/customers")
      .expect(200)
      .then(res => {
        expect(res.body[0].name).toBe("a");
      });
  });
});

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

	it("delete user with correct id", async () => {
		await Customer.create({ name: "a", email: "a@a.fr" });

		// get id
		const userId = await request(server)
			.get("/customers")
			.then(res => res.body[0]._id);

		return request(server)
			.del(`/customers/${userId}`)
			.expect(204);
	});

	it("update user", async () => {
		await Customer.create({ name: "a", email: "a@a.fr" });

		// get id
		const userId = await request(server)
			.get("/customers")
			.then(res => res.body[0]._id);

		return request(server)
			.put(`/customers/${userId}`)
			.send({ name: "john" })
			.then(res => {
				console.log(res.body);
				return expect(res.body.name).toBe("john");
			});
	});
});

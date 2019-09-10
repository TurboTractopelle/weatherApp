const request = require("supertest");
const server = require("../server")();
const User = require("../db/User");
const connection = require("../db/connection");

describe("userRoutes", () => {
	describe("protected path when not logged", () => {
		it("refuse access to private route if not auth", () => {
			return request(server)
				.get("/protected")
				.expect(401);
		});
		it("refuse access to private route if not auth", () => {
			return request(server)
				.get("/protected")
				.set("Authorization", "Bearer AAAA")
				.expect(401);
		});
	});

	describe("register", () => {
		it("error when not sending the body", () => {
			return request(server)
				.post("/register")
				.expect(400);
		});
		it("error when not sending the email", () => {
			return request(server)
				.post("/register")
				.send({ password: "a" })
				.expect(400);
		});
		it("error when not sending the password", () => {
			return request(server)
				.post("/register")
				.send({ email: "a@a.fr" })
				.expect(400);
		});
		it("create user when registed", () => {
			return request(server)
				.post("/register")
				.send({ email: "a@a.fr", password: "a" })
				.set("Content-Type", "application/json")
				.expect(200)
				.then(res => expect(res.body.password.length > 5).toBeTruthy());
		});

		describe("/auth", () => {
			beforeAll(async () => {
				await User.deleteMany({});
			});
			afterAll(async () => {
				await connection.close();
			});

			it("can access restriced page with token", async () => {
				await request(server)
					.post("/register")
					.send({ email: "a@a.fr", password: "a" })
					.set("Content-Type", "application/json");

				const token = await request(server)
					.post("/auth")
					.send({ email: "a@a.fr", password: "a" })
					.set("Content-Type", "application/json")
					.expect(200)
					.then(res => res.body.token);

				return await request(server)
					.get("/protected")
					.set("Authorization", "Bearer " + token)
					.expect(200);
			});
		});
	});
});

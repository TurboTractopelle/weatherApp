const request = require("supertest");
const server = require("../server")();

describe("userRoutes", () => {
	describe("protected path when not logged", () => {
		it("refuse access to private route if not auth", () => {
			return request(server)
				.get("/protected")
				.expect(401);
		});

		describe("register", () => {
			it("error when not sending the body", () => {
				return request(server)
					.post("/register")
					.expect(400);
			});
			it("error when bad header", () => {
				let token;

				request(server)
					.post("/register")
					.send({ email: "a@a.fr", password: "a" })
					.set("Content-Type", "application/json")
					.expect(200)
					.then(res => {
						token = res.body.password;
						return expect(res.body.password.length > 5).toBeTruthy();
					});

				console.log(token);

				request(server).post("/auth");
			});
		});
	});
});

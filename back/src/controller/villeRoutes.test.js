const request = require("supertest");
const server = require("../server")();

describe("weather routes", () => {
	it("return test on /test", () => {
		return request(server)
			.get("/test")
			.expect(200)
			.then(res => expect(res.body).toBe("test"));
	});
});

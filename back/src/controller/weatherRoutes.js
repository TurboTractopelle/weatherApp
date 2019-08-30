function weatherRoutes(server) {
	server.get("/test", getHome);

	function getHome(req, res, next) {
		res.send("test");
		next();
	}
}

module.exports = weatherRoutes;

const chalk = require("chalk");
const setUpServer = require("./server");
const PORT = 4000;
const connection = require("./db/connection");

// @ts-ignore
console.log(chalk`{cyan Lauching App API}`);
// @ts-ignore
console.log(chalk`{white Waiting for mongoDB connection}`);

connection.on("open", () => {
	// @ts-ignore
	console.log(chalk`{cyan Building the server}`);
	const server = setUpServer("Weather");

	server.listen(PORT, () => {
		// @ts-ignore
		console.log(chalk`{cyan Listening on port http://localhost:${PORT}}`);
	});
});

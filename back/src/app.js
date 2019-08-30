const chalk = require("chalk");
const setUpServer = require("./server");
const PORT = 4000;

// @ts-ignore
console.log(chalk`{cyan Lauching App API}`);

const server = setUpServer("test");

server.listen(PORT, () => {
	// @ts-ignore
	console.log(chalk`{cyan Listening on port http://localhost:${PORT}}`);
});

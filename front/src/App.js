import React from "react";
import "./App.css";
import chalk from "chalk";

console.log(chalk`{cyan CRA loading}`);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Front-end in React</p>
			</header>
		</div>
	);
}

export default App;

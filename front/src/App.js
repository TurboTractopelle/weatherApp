import React from "react";
import "./App.css";
import chalk from "chalk";
import Days from "./containers/Days/Days";

console.log(chalk`{cyan CRA loading}`);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Front-end in React</p>
				<Days />
			</header>
		</div>
	);
}

export default App;

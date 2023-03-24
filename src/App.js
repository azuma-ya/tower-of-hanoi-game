import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [gameClear, setGameClear] = useState(false);

	return (
		<div className="app">
			<Header />
			{gameClear ? (
				<div className="gameClear">Game Clear!!</div>
			) : (
				<Main setGameClear={setGameClear} />
			)}
		</div>
	);
}

export default App;

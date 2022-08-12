import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import History1 from "./Books/History1";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Phones from "./Electronics/Phones";
import Laptop from "./Electronics/Laptop";
import Cloths from "./Kids/Cloths";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route to="/">
						<Home />
					</Route>
					<Route to="/Phones">
						<Phones />
					</Route>
					<Route to="/Laptop">
						<Laptop />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

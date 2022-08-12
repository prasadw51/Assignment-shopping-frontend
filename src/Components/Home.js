import React from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Laptop from "../Electronics/Laptop";
import Phones from "../Electronics/Phones";
import Header from "./Header";
import PriceFilter from "./PriceFilter";
import History1 from "../Books/History1";
import Technology from "../Books/Technology";
import Cloths from "../Kids/Cloths";
import Toys from "../Kids/Toys";
import Cart from "../Screens/Cart";

const Home = () => {
	return (
		<div className="row">
			<Header />
			<div className="col-sm-4">
				<PriceFilter />
			</div>
			<div className="col-sm-8">
				<BrowserRouter>
					<Switch>
						<Route path="/Phones">
							<Phones />
						</Route>
						<Route path="/Laptop">
							<Laptop />
						</Route>
						<Route path="/History1">
							<History1 />
						</Route>
						<Route path="/Technology">
							<Technology />
						</Route>
						<Route path="/Cloths">
							<Cloths />
						</Route>
						<Route path="/Toys">
							<Toys />
						</Route>
						<Route path="/Cart">
							<Cart />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default Home;

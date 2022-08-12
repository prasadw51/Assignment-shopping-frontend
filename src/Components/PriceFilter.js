import { Link } from "react-router-dom";
import React, { useState } from "react";
import Phones from "../Electronics/Phones";
import Laptop from "../Electronics/Laptop";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function PriceFilter() {
	const [show, setShow] = useState(false);
	const [dis, setEle] = useState(false);
	const [disp, setBook] = useState(false);
	const [dispay, setKid] = useState(false);

	return (
		<div class="row row-no-gutters">
			<div class="col-sm-3">
				<h5 onClick={() => setShow(true)}>Category</h5>
				{show ? (
					<div>
						<h4 onClick={() => setEle(true)}>Electronics</h4>
						{dis ? (
							<div>
								<BrowserRouter>
									<a href="/Phones">Mobile</a>
									<br></br>
									<a href="/Laptop">Laptop</a>
								</BrowserRouter>
							</div>
						) : null}
						<h5 onClick={() => setBook(true)}>Books</h5>
						{disp ? (
							<div>
								<a href="/History1">History</a>
								<br></br>
								<a href="/Technology">Technology</a>
							</div>
						) : null}
						<h5 onClick={() => setKid(true)}>Kids</h5>
						{dispay ? (
							<div>
								<a href="/Cloths">Cloths</a>
								<br></br>
								<a href="/Toys">Toys</a>
							</div>
						) : null}
					</div>
				) : null}

				<h6>Price Range</h6>
				<input type="number" className="input-min" value={"25000"} />
				<input type="number" className="input-min" value={"25000"} />
			</div>
		</div>
	);
}
export default PriceFilter;

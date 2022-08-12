import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Cart from "../Screens/Cart";
function Cloths() {
	let history = useHistory();
	return (
		<div class="container">
			<div class="row">
				<div class="col-md-12 mt-5">
					<div class="col-md-4 dress dress-card">
						<div class="dress-card-head">
							<img class="dress-card-img-top" src="Pant.jpg" alt="" />
							<div class="surprise-bubble">
								<span class="dress-card-heart">
									<i class="fas fa-heart"></i>
								</span>
							</div>
						</div>
					</div>
					<div
						class="col-md-8 dress dress-card align-centers content"
						id="info"
					>
						<div className="row">
							<div class=" col-4  dress">
								<h4 class="dress-card-title">Jeans for Boys</h4>
								<p class="dress-card-para">Cloths For Kids</p>

								<p class="dress-card-para">
									<span class="dress-card-price">Rs.899 &ensp;</span>
								</p>
							</div>
						</div>
						<div className="row">
							<div class=" col-4 card-button-inner bag-button dress-card-off">
								Add to Bag
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div class="col-md-12 mt-5">
					<div class="col-md-4 dress dress-card">
						<div class="dress-card-head">
							<img class="dress-card-img-top" src="Shirt.jpg" alt="" />
							<div class="surprise-bubble">
								<span class="dress-card-heart">
									<i class="fas fa-heart"></i>
								</span>
							</div>
						</div>
					</div>
					<div
						class="col-md-8 dress dress-card align-centers content"
						id="info"
					>
						<div className="row">
							<div class=" col-4  dress">
								<h4 class="dress-card-title">White Shirt</h4>
								<p class="dress-card-para">Cloths For Kids</p>
								<p class="dress-card-para">
									<span class="dress-card-price">Rs.999 &ensp;</span>
								</p>
							</div>
						</div>
						<div className="row">
							<div class=" col-4 card-button-inner bag-button dress-card-off">
								Add to Bag
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cloths;

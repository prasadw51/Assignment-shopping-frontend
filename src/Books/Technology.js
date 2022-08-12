import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

const Technology = () => {
	let history = useHistory();

	return (
		<div class="container">
			<div class="row">
				<div class="col-md-12 mt-5">
					<div class="col-md-4 dress dress-card">
						<div class="dress-card-head">
							<img class="dress-card-img-top" src="Musk.jpg" alt="" />
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
							<div class=" col-6  dress">
								<h4 class="dress-card-title">Life Of Elon Musk</h4>
								<span class="dress-card-price">999 Rs &ensp;</span>

								<p class="dress-card-para"></p>
								<h7>Auther : Elon Musk</h7>
							</div>
						</div>
						<div className="row">
							<div class=" col-6 card-button-inner bag-button dress-card-off">
								Add to Bag
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div class="col-md-12 mt-5">
					<div class="col-md-4 dress dress-card">
						<div class="dress-card-head">
							<img class="dress-card-img-top " src="King.jpg" alt="" />
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
							<div class=" col-5  dress">
								<h4 class="dress-card-title">The King Of Shadow</h4>
								<span class="dress-card-price">999 Rs &ensp;</span>

								<p class="dress-card-para"></p>
								<h7>Auther : Robert</h7>
							</div>
						</div>
						<div className="row">
							<div class=" col-6 card-button-inner bag-button dress-card-off">
								Add to Bag
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;

import React from "react";
import { Link, useHistory } from "react-router-dom";
function Laptop() {
	let history = useHistory();

	return (
		<div class="container">
			<div class="row">
				<div class="col-md-12 mt-5">
					<div class="col-md-4 dress dress-card">
						<div class="dress-card-head">
							<img class="dress-card-img-top" src="i11.jpg" alt="" />
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
								<h4 class="dress-card-title">Apple iPhone 13 Pro</h4>
								<span class="dress-card-price">89,999 Rs &ensp;</span>

								<p class="dress-card-para"></p>
								<h7>Ram : 8GB</h7>
								<br />
								<h7>Internal Storage : 64 GB</h7>
								<br />
								<h7>USB Port : Type C</h7>
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
							<img class="dress-card-img-top " src="d1.jpg" alt="" />
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
								<h4 class="dress-card-title">HP Pavillion v8</h4>
								<span class="dress-card-price">29,999 Rs &ensp;</span>

								<p class="dress-card-para"></p>
								<h7>Ram : 8GB</h7>
								<br />
								<h7>Hard Disk : 500 GB</h7>
								<br />
								<h7>Processor : intel i7</h7>
								<br />
								<h7>Core : Dual Core</h7>
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
}
export default Laptop;

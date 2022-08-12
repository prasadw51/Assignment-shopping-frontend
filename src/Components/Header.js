import "./header.css";
function Header() {
	return (
		<div className="nav-bar row">
			<nav className="navbar navbar-dark bg-primary">
				<nav className="navbar navbar-expand-lg col-md-3 ">
					<img src="logo.png" />
				</nav>
				<div className="col-md-3"></div>
				<form className="form-inline search col-md-6">
					<div className="in">
						<input
							className="form-control"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</div>
					&nbsp;
					<div className="in">
						<button className="btn btn-success b1" type="submit">
							Search
						</button>
					</div>
				</form>
			</nav>
		</div>
	);
}

export default Header;

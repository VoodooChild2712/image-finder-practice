import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return <div className="navbar bg-dark d-flex flex-row">
		<Link to={'/'} className="btn btn-light">
			Home
		</Link>
	</div>;
};

export default Navbar;

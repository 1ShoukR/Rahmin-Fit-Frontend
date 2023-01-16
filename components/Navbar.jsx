import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
return (
	<>
		<nav className="wrapper">
			<ul className="container">
				<li className="linkContainer">
					<Link to="/">Home</Link>
				</li>
				<li className="linkContainer">
					<Link to="/free_consultation">Free Consultation</Link>
				</li>
				<li className="linkContainer">
					<Link to="/train">Training Options</Link>
				</li>
				<li className="linkContainer">
					<Link to="/compare">Compare</Link>
				</li>
				<li className="linkContainer">
					<Link to="/why_rahmin_fit">Why Rahmin Fit</Link>
				</li>
				<li className="linkContainer">
					
					<Link to="/gallery"><a href="">Gallery</a></Link>
				</li>
				<li className="linkContainer">
					<Link to="/refund_policy">Refund Policy</Link>
				</li>
				<li className="linkContainer">
					<Link to="/contact">Contact Me</Link>
				</li>
				<li className="linkContainer">
					<Link to="/create_account">Create an Account</Link>
				</li>
			</ul>
		</nav>
	</>
);
};

export default Navbar;

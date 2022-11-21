import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/free_consultation">Free Consultation</Link>
					</li>
					<li>
						<Link to="/train">Training Options</Link>
					</li>
					<li>
						<Link to="/compare">Compare</Link>
					</li>
					<li>
						<Link to="/why_rahmin_fit">Why Rahmin Fit</Link>
					</li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/refund_policy">Refund Policy</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 100,
		behavior: "smooth",
	});
};

const getStartScrollTo = () => {
	window.scrollTo({
		top: 750,
		left: 100,
		behavior: "smooth",
	});
};

export const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, [button]);

	window.addEventListener("resize", showButton);
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={scrollToTop}>
						KIDEV <i class="fa-solid fa-chalkboard"></i>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-bars" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nam-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={scrollToTop}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/Services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={getStartScrollTo}>
								Learn
							</Link>
						</li>
						{/* <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign-up
              </Link>
            </li> */}
					</ul>
					{/* {button && <Button buttonStyle="btn--outline">SING UP</Button>} */}
				</div>
			</nav>
		</>
	);
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);
	// const [selected, setSelected] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};
	const handleNavLinkClick = () => {
		setShowNavbar(false);
	};

	return (
		<div className="wrapper-nav">
			<nav className="navbar">
				<div className="nav-container">
					<div className="logo">
						<Link to="/">
							<img
								src="logo.png"
								alt="Logo"
								className="logo-img"
							/>
						</Link>
					</div>
					<div className="menu-icon" onClick={handleShowNavbar}>
						{showNavbar ? <IoMdClose /> : <RiMenu3Line />}
					</div>
					<div className={`nav-elements  ${showNavbar && "active"}`}>
						<ul>
							<li>
								<Link to="/" onClick={handleNavLinkClick}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" onClick={handleNavLinkClick}>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/howToUse"
									onClick={handleNavLinkClick}>
									How To Use
								</Link>
							</li>
							<li>
								<Link
									to="/predict"
									onClick={handleNavLinkClick}
									className="cta-button">
									Check Up
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

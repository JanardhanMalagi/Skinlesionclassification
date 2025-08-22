import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="footer">
				<div className="footer-container">
					<div className="footer-row">
						<div className="footer-column">
							<Link to="/">
								<img
									src="logo.png"
									alt="Logo"
									className="footer-logo"
								/>
							</Link>
						</div>

						<div className="footer-column">
							<h3 className="footer-h3">Useful Links</h3>
							<ul className="footer-ul">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/howToUse">How To Use</Link>
								</li>
								<li>
									<Link to="/predict">Check Up</Link>
								</li>
							</ul>
						</div>
						<div className="footer-column">
							<h3 className="footer-h3">
								Our Team - social link
							</h3>
							<ul className="footer-ul">
								<li>
									<a
										className="footer-a"
										target="_blank"
										href="https://www.linkedin.com/in/amit-jahagirdar-b3150320b/">
										Amit Jahagirdar
									</a>
								</li>
								<li>
									<a
										className="footer-a"
										target="_blank"
										href="https://www.linkedin.com/in/shrinidhi-kulkarni-969996255/">
										Shrinidhi Kulkarni
									</a>
								</li>
								<li>
									<a
										className="footer-a"
										target="_blank"
										href="https://www.linkedin.com/in/janardhan-malagi-030217225/">
										Janardhan Malagi
									</a>
								</li>
								<li>
									<a
										className="footer-a"
										target="_blank"
										href="https://www.linkedin.com/in/sanjay-hiremath-a56163227/">
										Sanjay Kumar Hiremath
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<p className="copy">
					Copyright &#169; {year}. All rights reserverd
				</p>
			</footer>
		</>
	);
};

export default Footer;

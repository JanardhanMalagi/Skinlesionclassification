import { Link } from "react-router-dom";
import "./hero.css";
const Hero = ({ title, description, link = false, imgSrc }) => {
	return (
		<div className="hero-container">
			<div className="left-section">
				<img src={imgSrc} alt="Skin Disease" className="hero-image" />
			</div>
			<div className="right-section">
				<h1 className="title">{title}</h1>
				<p className="description">{description}</p>
				{link && (
					<div className="links-container">
						<Link
							to="/predict"
							className="cta-button moving-border">
							Check Up
						</Link>
						<Link to="/about" className="learn-more">
							Learn more &rarr;
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;

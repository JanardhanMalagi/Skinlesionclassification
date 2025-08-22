import { useState } from "react";
import Predict from "../predict/Predict";
import Results from "../results/Results";
import "./predictHero.css";

const PredictHero = () => {
	const [disease, setDisease] = useState(null);
	const [imagePath, setImagePath] = useState(null);
	const [predict, setPredict] = useState(false);
	return (
		<>
			<div className="hero">
				<div className="hero-section">
					<div className="hero-content">
						<img
							src="hero.png"
							alt="hero image"
							className="predict-hero-image"
						/>
						<h1>Empowering Skin Health Through Technology</h1>
						<p>Get accurate predictions for skin diseases</p>
					</div>
				</div>
				<Predict
					disease={setDisease}
					imagePath={setImagePath}
					predict={setPredict}
					disable={predict}
				/>
			</div>
			<Results
				disease={disease}
				imagePath={imagePath}
				predict={predict}
			/>
		</>
	);
};

export default PredictHero;

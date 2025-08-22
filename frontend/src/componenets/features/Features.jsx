import "./feature.css";
import { FaDatabase } from "react-icons/fa6";

const Features = () => {
	return (
		<>
			<h2 className="seconadry-heading">Features</h2>
			<section className="feature-section">
				<div className="feature">
					<div className="icon">⚡️</div>
					<h3>AI classification </h3>
					<p>
						Our AI model classifies the disease based on the
						uploaded image.
					</p>
				</div>
				<div className="feature">
					<div className="icon">🔍</div>
					<h3>Accuracy</h3>
					<p>
						97.5% accuracy in predicting skin diseases using machine
						learning algorithms.
					</p>
				</div>
				<div className="feature">
					<div className="icon">
						<FaDatabase />
					</div>
					<h3>Trained on HAM10000 Dataset</h3>
					<p>
						We utilized the HAM10000 dataset for training our
						machine learning model.
					</p>
				</div>
				<div className="feature">
					<div className="icon">👩‍⚕️</div>
					<h3>Precautions & Recommendations</h3>
					<p>
						Receive suggestions for precautions and recommended
						actions.
					</p>
				</div>
			</section>
		</>
	);
};

export default Features;

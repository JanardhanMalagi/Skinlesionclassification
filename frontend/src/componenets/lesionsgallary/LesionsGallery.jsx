import lesionsData from "../../utils/lesionsData"; // Assuming you have the lesions data in a file named lesionsData.js
import "./LesionsGallery.css"; // Assuming you have a CSS file named LesionsGallery.css

const LesionsGallery = () => {
	return (
		<div className="lesions-gallery">
			{lesionsData.map((lesion) => (
				<div key={lesion.id} className="lesion-card">
					<img
						src={lesion.image}
						alt={lesion.name}
						className="lesion-image"
					/>
					<div className="lesion-info">
						<h3 className="lesion-name">{lesion.name}</h3>
						<p className="lesion-description">
							{lesion.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default LesionsGallery;

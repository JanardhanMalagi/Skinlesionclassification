import { useState, useEffect } from "react";
import "./result.css"; // Import the CSS file for styling
import data from "../../utils/data"; // Import the data from the utils folder
import { GrYoutube } from "react-icons/gr";
import { SiGooglemaps } from "react-icons/si";
import { FaWikipediaW } from "react-icons/fa";
import Loding from "../loding/Loding";

const Results = ({ disease, imagePath, predict }) => {
	const categories = data[disease]; // Get the categories for the selected disease
	// console.log(categories);

	const [activeTab, setActiveTab] = useState("Symptoms");

	const handleTabChange = (tabName) => {
		setActiveTab(tabName);
	};
	useEffect(() => {
		if (disease) {
			window.scrollTo({
				top: window.scrollY + 300,
				behavior: "smooth",
			});
		}
	}, [disease]);

	return (
		<>
			{disease ? (
				<>
					<h1 className="disease-detected">
						Disease Detected : {disease}
					</h1>
					<div className="links">
						<a
							className="chip"
							href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
								disease
							)}`}
							target="_blank"
							rel="noopener noreferrer">
							<div className="chip-icon">
								<GrYoutube />
							</div>
							<div className="chip-text">YouTube</div>
						</a>
						<a
							className="chip"
							href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
								disease
							)}`}
							target="_blank"
							rel="noopener noreferrer">
							<div className="chip-icon">
								<FaWikipediaW />
							</div>
							<div className="chip-text">Wikipedia</div>
						</a>
						<a
							className="chip"
							href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
								"dermatologist near me"
							)}`}
							target="_blank"
							rel="noopener noreferrer">
							<div className="chip-icon">
								<SiGooglemaps />
							</div>
							<div className="chip-text">Doctor Near Me</div>
						</a>
					</div>

					<div className="results-container">
						<div className="tab-container">
							{Object.keys(categories).map((category) => (
								<div
									key={category}
									className={`tab ${
										activeTab === category ? "active" : ""
									}`}
									onClick={() => handleTabChange(category)}>
									{category}
								</div>
							))}
						</div>
						<div className="tab-content-container">
							{Object.keys(categories).map((category) => (
								<div
									key={category}
									className={`tab-content ${
										activeTab === category ? "active" : ""
									}`}>
									<ul>
										{categories[category].map((item) => (
											<li
												key={item.id}
												className="tab-item">
												<h3>{item.title}</h3>
												<p>{item.description}</p>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</>
			) : (
				<>{predict && <Loding />}</>
			)}
		</>
	);
};

export default Results;

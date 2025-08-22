import "./Using.css";

const Using = () => {
	return (
		<>
			<section className="section-how" id="how">
				<h2 className="how-heading">How to use</h2>

				<div className="how-container">
					<div className="step">
						<div className="step-text-box">
							<p className="step-number">01</p>
							<h3 className="heading-tertiary">
								Click on the "Check Up" button
							</h3>
							<p className="step-description">
								Get access to prediction page by clicking the
								"Check Up" button in the application or website.
								This feature aids in effective classification of
								skin lesions.
							</p>
						</div>

						<div className="step-img-box">
							<img
								src="../../../public/htu_1.png"
								className="step-img"
								alt="iPhone app preferences selection screen"
							/>
						</div>
					</div>

					<div className="step odd-step">
						<div className="step-img-box">
							<img
								src="../../../public/htu_2.png"
								className="step-img"
								alt="iPhone app preferences selection screen"
							/>
						</div>

						<div className="step-text-box">
							<p className="step-number">02</p>
							<h3 className="heading-tertiary">
								Upload an image
							</h3>
							<p className="step-description">
								Ensure the image size is 32x32 and that it
								clearly shows the lesion part without including
								unnecessary background elements. This will help
								in accurate classification.
							</p>
						</div>
					</div>

					<div className="step">
						<div className="step-text-box">
							<p className="step-number">03</p>
							<h3 className="heading-tertiary">
								Click on the "Predict" button
							</h3>
							<p className="step-description">
								After uploading your image, click the "Predict"
								button. Wait 5 - 6 seconds for the app or
								website to display disease detected, helpful
								links, symptoms, precautions, and
								recommendations.
							</p>
						</div>

						<div className="step-img-box">
							<img
								src="../../../public/htu_3.png"
								className="step-img"
								alt="iPhone app preferences selection screen"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Using;

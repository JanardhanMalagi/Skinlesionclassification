import Hero from "../componenets/hero/Hero";
import LesionsGallery from "../componenets/lesionsgallary/LesionsGallery";

const About = () => {
	return (
		<>
			<Hero
				title={"An Overview of the HAM10000 Dataset"}
				description={
					"Find out how we're using the HAM10000 dataset to develop the skin lesion classification system, advancing dermatological diagnostics."
				}
				imgSrc={"../../public/hero_img_2.jpg"}
			/>
			<div className="content-container">
				<h3 className="gallery-heading">HAM10000 Diseases</h3>
				<LesionsGallery />
			</div>
		</>
	);
};

export default About;

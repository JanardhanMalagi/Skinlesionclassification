import AllAccordions from "../componenets/accordion/AllAccordions";
import Features from "../componenets/features/Features";
import Hero from "../componenets/hero/Hero";

const Home = () => {
	return (
		<>
			<Hero
				title={"DermDetect: AI-Powered Skin Disease Classifier"}
				description={
					"Upload an image to predict skin diseases and get recommendations."
				}
				link={true}
				imgSrc={"../../public/h_img.jpg"}
			/>
			<Features />
			<AllAccordions />
		</>
	);
};

export default Home;

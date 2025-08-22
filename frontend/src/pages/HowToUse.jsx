import AllAccordions from "../componenets/accordion/AllAccordions";
import Hero from "../componenets/hero/Hero";
import Using from "../componenets/use/Using";

const HowToUse = () => {
	return (
		<>
			<Hero
				title={"How to Use Skin Lesion Detection App"}
				description={
					"Learn to use and classify skin lesions. Upload images, analyze results, and get recommendations for better skin health."
				}
				link={true}
				imgSrc={"../../public/how_to_use.jpg"}
			/>
			<Using />
			<AllAccordions />
		</>
	);
};

export default HowToUse;

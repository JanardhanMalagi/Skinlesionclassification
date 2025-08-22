import Accordion from "./Accordion";
import "./Accordion.css";
import faq from "../../utils/accordion-data.js";

const AllAccordions = () => {
	return (
		<>
			<h3 className="accordion-heading">FAQs</h3>
			<div className="allAccordions">
				{faq.map((item, index) => (
					<Accordion
						key={index}
						title={item.title}
						content={item.content}
					/>
				))}
			</div>
		</>
	);
};

export default AllAccordions;

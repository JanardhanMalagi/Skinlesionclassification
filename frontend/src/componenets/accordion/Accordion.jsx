import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	const toggleAccordion = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="accordion">
			<div
				className={`accordion-header ${isActive ? "active" : ""}`}
				onClick={toggleAccordion}>
				<div className="accordion-title">{title}</div>
				<div className="accordion-icon">
					{isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
				</div>
			</div>
			{isActive && (
				<div className="accordion-content">
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;

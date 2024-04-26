
import React from "react";

import caloriesIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import fatIcon from "../assets/fat-icon.png";
import carbsIcon from "../assets/carbs-icon.png";


function Nutriment(props) {

	let nutrimentPicture;
	const type: String = props.type;
	const value: number = props.value;

	switch (type) {
		case 'Proteines':
			nutrimentPicture = proteinIcon;
			break;
		case 'Calories':
			nutrimentPicture = caloriesIcon;
			break;
		case 'Lipides':
			nutrimentPicture = fatIcon;
			break;
		case 'Glucides':
			nutrimentPicture = carbsIcon;
			break;
		default:
			break;
	}

	return (
		<div className="nutriment">
			<img src={nutrimentPicture} alt={type} />
			<div className="nutriment-infos">
				<span className="nutriment-value">{value}{type === 'Calories' ? ('kCal') : ('g')}</span>
				<span className="nutriment-type">{type}</span>
			</div>
		</div>
	);
}

export default Nutriment;
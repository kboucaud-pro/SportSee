
import React from "react";

import weightIcon from "../assets/weight-icon.png";
import swimIcon from "../assets/swim-icon.png";
import meditationIcon from "../assets/meditation-icon.png"
import bikeIcon from "../assets/bike-icon.png";

function Leftbar() {
	return (
		<div className="left-bar">
			<div className="left-bar-icons">
				<img src={meditationIcon} alt="meditation"/>
				<img src={swimIcon} alt="swim" />
				<img src={bikeIcon} alt="bike" />
				<img src={weightIcon} alt="weight" />
			</div>
			<span className="left-bar-copyright">Copyright, SportSee 2020</span>
		</div>
	)
}

export default Leftbar;
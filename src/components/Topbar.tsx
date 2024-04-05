
import React from "react";

import logo from "../assets/Logo.png";

function Topbar() {
	return (
		<div className="top-bar">
			<div className="logo-title">
				<img src={logo} alt="logo" />
				<span>SportSee</span>
			</div>
			<span className="top-bar-link">Accueil</span>
			<span className="top-bar-link">Profil</span>
			<span className="top-bar-link">Réglages</span>
			<span className="top-bar-link">Communauté</span>
		</div>
	);
}

export default Topbar;
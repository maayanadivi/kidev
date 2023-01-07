import React from "react";
import "../../App.css";
import a1 from "../../assets/unit1/a1.png";
import a2 from "../../assets/unit1/a2.png";
import a3 from "../../assets/unit1/a3.png";
import a4 from "../../assets/unit1/a4.png";

import Game from "../games/memoryGame/Game";
import Footer from "../Footer";

function Unit1() {
	return (
		<>
			<img src={a1} alt={""} />
			<img src={a2} alt={""} />
			<img src={a3} alt={""} />
			<img src={a4} alt={""} />

			<Game />

			<Footer />
		</>
	);
}

export default Unit1;

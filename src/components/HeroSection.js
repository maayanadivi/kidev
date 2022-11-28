import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

const getStartScrollTo = () => {
	window.scrollTo({
		top: 750,
		left: 100,
		behavior: "smooth",
	});
};

export const HeroSection = () => {
	return (
		<div className="hero-container">
			<video src="videos/video-2.mp4" autoPlay loop muted />
			<h1>PROGRAMMING IT`S FUN</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={getStartScrollTo}
				>
					GET STARTED <i class="fa-solid fa-play"></i>
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;

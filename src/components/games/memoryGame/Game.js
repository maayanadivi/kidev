import React, { useState } from "react";
import "../../games/memoryGame/Game.css";
import ring from "./imgGame/ring-1.png";
import helmet from "./imgGame/helmet-1.png";
import potion from "./imgGame/potion-1.png";
import scroll from "./imgGame/scroll-1.png";
import shield from "./imgGame/shield-1.png";
import sword from "./imgGame/sword-1.png";
import cover from "./imgGame/cover.png";

const cardImages = [
	{ src: ring },
	{ src: sword },
	{ src: shield },
	{ src: potion },
	{ src: helmet },
	{ src: scroll },
];

function Game() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0); // resat the turns
	};

	console.log(cards, turns);

	return (
		<div className="Game">
			<h1> Magic Match </h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card) => (
					<div className="card" key={card.id}>
						<div>
							<img className="front" src={card.src} alt="card front" />
							<img className="back" src={cover} alt="card back" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Game;

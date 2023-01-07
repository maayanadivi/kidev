import React, { useEffect, useState } from "react";
import "../../games/memoryGame/Game.css";
import ring from "./imgGame/1.png";
import helmet from "./imgGame/2.png";
import potion from "./imgGame/3.png";
import scroll from "./imgGame/4.png";
import shield from "./imgGame/5.png";
import sword from "./imgGame/6.png";
//import cover from "./imgGame/cover.png";
import SingleCard from "./SingleCard";

const cardImages = [
	{ src: ring, matched: false },
	{ src: sword, matched: false },
	{ src: shield, matched: false },
	{ src: potion, matched: false },
	{ src: helmet, matched: false },
	{ src: scroll, matched: false },
];

function Game() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCards);
		setTurns(0); // resat the turns
	};

	// handle a choice
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	//compare 2 selected cards
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [choiceOne, choiceTwo]);
	console.log(cards);

	//reset choices & increase turn
	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};

	// start a new game automaticly
	useEffect(() => {
		shuffleCards();
	}, []);

	return (
		<div className="Game">
			<h1> Magic Match </h1>
			<button style={{ marginTop: "20px" }} onClick={shuffleCards}>
				New Game
			</button>

			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			<p style={{ marginTop: "20px" }}>Turns: {turns}</p>
		</div>
	);
}

export default Game;

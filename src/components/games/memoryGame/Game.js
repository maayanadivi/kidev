import React, { useEffect, useState } from "react";
import "../../games/memoryGame/Game.css";
import ring from "./imgGame/ring-1.png";
import helmet from "./imgGame/helmet-1.png";
import potion from "./imgGame/potion-1.png";
import scroll from "./imgGame/scroll-1.png";
import shield from "./imgGame/shield-1.png";
import sword from "./imgGame/sword-1.png";
//import cover from "./imgGame/cover.png";
import SingleCard from "./SingleCard";

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

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
      if (choiceOne.src === choiceTwo.src) {
        console.log("cards match");
        resetTurn();
      } else {
        console.log("card not match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="Game">
      <h1> Magic Match </h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default Game;

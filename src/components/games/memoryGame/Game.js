import React, { useState } from "react";
import "../../games/memoryGame/Game.css";

const cardImages = [
  { src: "../../../../public/images/img-2.jpg" },
  { src: "../../../../public/images/img-2.jpg" },
  { src: "../../../../public/images/img-2.jpg" },
  { src: "../../../../public/images/img-2.jpg" },
  { src: "../../../../public/images/img-2.jpg" },
  { src: "../../../../public/images/img-2.jpg" },
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
              <img
                className="back"
                src="./public/images/cover.png"
                alt="card back"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;

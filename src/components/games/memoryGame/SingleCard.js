import React from "react";
import "./singleCard.css";
import cover from "./imgGame/cover.png";

export default function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={cover}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

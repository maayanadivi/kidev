import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Study Units</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="In this chapter we will explore and learn about variables "
              label="Unit 1"
              path="/unit1"
            />
            <CardItem
              src="images/img-2.jpg"
              text="In this chapter we will explore and learn about input and characters"
              label="Unit 2"
              path="/unit2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="In this chapter we will explore and learn about conditions"
              label="Unit 3"
              path="/unit3"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Soon the unit will be ready"
              label="Unit 4"
              path="/soon"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Soon the unit will be ready"
              label="Unit 5"
              path="/soon"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

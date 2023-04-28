import React from "react";
import "../../App.css";
import b1 from "../../assets/unit2/b1.png";
import b2 from "../../assets/unit2/b2.png";
import b3 from "../../assets/unit2/b3.png";
import b4 from "../../assets/unit2/b4.png";

import Footer from "../Footer";
import QuizGame from "../games/TriviaGame/QuizGame";

function Unit2() {
  return (
    <>
      <img src={b1} alt={""} />
      <img src={b2} alt={""} />
      <img src={b3} alt={""} />
      <img src={b4} alt={""} />
      <QuizGame />

      <Footer />
    </>
  );
}

export default Unit2;

import React from "react";
import "../../App.css";
import c1 from "../../assets/unit3/c1.jpg";
import c2 from "../../assets/unit3/c2.jpg";
import Footer from "../Footer";
import QuizGame from "../games/TriviaGame3/QuizGame";
function Unit3() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <img src={c1} alt={""} />
        </div>
        <div>
          <img src={c2} alt={""} />
        </div>
      </div>
      <QuizGame />
      <Footer />
    </>
  );
}

export default Unit3;

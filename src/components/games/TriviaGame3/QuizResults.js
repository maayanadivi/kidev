import React from "react";
import questions from "./QuizData";
import "./QuizGame.css";

const QuizResult = (props) => {
  return (
    <div className="score-section">
      <h2>Completed</h2>
      <h4>
        Total Score {props.score}/{questions.length * 5}
      </h4>
      <h4>
        Your Correct Question {props.correctAns} out of {questions.length}
      </h4>
      <div className="actions">
        <button onClick={props.handlePlayAgain}>Play again</button>
      </div>
    </div>
  );
};

export default QuizResult;

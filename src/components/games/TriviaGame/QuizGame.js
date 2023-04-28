import React, { useState } from "react";
import "./QuizGame.css";
import questions from "./QuizData";
import QuizResult from "./QuizResults";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResults] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleNextOption = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(correctAns + 1);
    }
    setClicked(true);
  };

  const handlePlayAgain = () => {
    setScore(0);
    setCorrectAns(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className="gameBody">
      <div className="app">
        {showResult ? (
          <QuizResult
            score={score}
            correctAns={correctAns}
            handlePlayAgain={handlePlayAgain}
          />
        ) : (
          <>
            <div className="question-section">
              <h5>Score: {score}</h5>
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((ans, i) => {
                return (
                  <button
                    className={`button ${
                      clicked
                        ? clicked & ans.isCorrect
                          ? "correct"
                          : "in-correct"
                        : "button"
                    }`}
                    disabled={clicked}
                    key={i}
                    onClick={() => handleAnswerOption(ans.isCorrect)}
                  >
                    {ans.answerText}
                  </button>
                );
              })}
              <div className="actions">
                <button disabled={!clicked} onClick={handleNextOption}>
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;

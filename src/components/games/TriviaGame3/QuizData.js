import Q1 from "./assets/Q1.png";
import Q2 from "./assets/Q2.png";
import Q3 from "./assets/Q3.png";

const questions = [
  {
    questionText: "?מה ידפיס קטע הקוד הבא",
    answerOptions: [
      { answerText: "good", isCorrect: false },
      { answerText: "good example", isCorrect: true },
      { answerText: "emapple", isCorrect: false },
      { answerText: "לא יודפס דבר", isCorrect: false },
    ],
    imgSrc: Q1,
  },
  {
    questionText: "?מה ידפיס קטע הקוד הבא",
    answerOptions: [
      { answerText: "לא יודפס דבר", isCorrect: true },
      { answerText: "It is me", isCorrect: false },
      { answerText: "again", isCorrect: false },
      { answerText: "It is me again", isCorrect: false },
    ],
    imgSrc: Q2,
  },
  {
    questionText: "?מה ידפיס קטע הקוד הבא",
    answerOptions: [
      { answerText: "It is me", isCorrect: false },
      { answerText: " It is me again", isCorrect: false },
      { answerText: "again", isCorrect: true },
      { answerText: "לא יודפס דבר", isCorrect: false },
    ],
    imgSrc: Q3,
  },
];
export default questions;

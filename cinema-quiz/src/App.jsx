import { useState } from "react";
import "./App.css";
import { QUESTIONS } from "./questions";

function App() {
  const [currQuestion, setCurrQustion] = useState(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currQuestion + 1;

    if (nextQuestion < QUESTIONS.length) {
      setCurrQustion(nextQuestion);
    } else {
      setStatus(true);
    }
  };

  const resetQuiz = () => {
    setCurrQustion(0);
    setScore(0);
    setStatus(false);
  };

  return (
    <div className="app">
      {status === true ? (
        <div className="right-answers">
          <p>
            Right answers: {score} of {QUESTIONS.length}
          </p>
          <button className="btn reset-quiz" onClick={resetQuiz}>
            Try your luck again
          </button>
        </div>
      ) : (
        <div className="quiz">
          <div className="quiz__question question">
            <div className="question__count">
              <span>Question {currQuestion + 1}</span> / {QUESTIONS.length}
            </div>
            <div className="question__text">{QUESTIONS[currQuestion].text}</div>
          </div>
          <div className="quiz__answer answer">
            {QUESTIONS[currQuestion].answers.map((answer) => (
              <button
                key={answer._id}
                className="btn answer__variant"
                onClick={() => {
                  handleAnswer(answer.isCorrect);
                }}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

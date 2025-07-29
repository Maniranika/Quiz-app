import React, { useState } from "react";
import questions from "./data";
import "./App.css";

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>React Quiz App</h1>
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>{questions[currentQ].question}</h2>
          <div className="options">
            {questions[currentQ].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
          <p>Question {currentQ + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// src/Result.js
import React from "react";
import "./App.css";

function Result({ score, totalQuestions, restartQuiz }) {
  return (
    <div className="result">
      <h2>Your Score</h2>
      <p>
        You scored {score} out of {totalQuestions}!
      </p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Result;

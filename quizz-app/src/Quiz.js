// src/Quiz.js
import React from "react";
import "./App.css";

function Quiz({ question, handleAnswer, currentQuestionIndex, totalQuestions }) {
  return (
    <div className="quiz">
      <h2>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h2>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

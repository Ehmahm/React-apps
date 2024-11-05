// src/App.js
import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: "Harper Lee",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "0"],
    answer: "2",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="app">
      <h1>Quiz App</h1>
      {quizCompleted ? (
        <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <Quiz
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default App;

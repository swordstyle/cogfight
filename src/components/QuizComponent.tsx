"use client";

import { useState, useEffect } from "react";

interface QuizComponentProps {
  options: string[];
  correctAnswer: string;
  explanation: string;
  onAnswer: (isCorrect: boolean) => void;
  postId: string;
}

export function QuizComponent({ options, correctAnswer, explanation, onAnswer, postId }: QuizComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [postId]);

  const handleAnswerClick = (option: string) => {
    if (showResult) return;

    setSelectedAnswer(option);
    setShowResult(true);
    const isCorrect = option === correctAnswer;
    onAnswer(isCorrect);
  };

  const getButtonStyle = (option: string) => {
    if (!showResult) {
      return "bg-gray-800 hover:bg-gray-700 border-gray-600 text-white";
    }

    if (option === correctAnswer) {
      return "bg-green-600 border-green-500 text-white";
    }

    if (option === selectedAnswer && option !== correctAnswer) {
      return "bg-red-600 border-red-500 text-white";
    }

    return "bg-gray-800 border-gray-600 text-gray-400";
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        What cognitive bias is present in this post?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerClick(option)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left font-medium ${getButtonStyle(option)}`}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`mt-6 p-4 rounded-lg border-2 ${
          selectedAnswer === correctAnswer
            ? "bg-green-900/20 border-green-500 text-green-100"
            : "bg-red-900/20 border-red-500 text-red-100"
        }`}>
          <h4 className="font-bold text-lg mb-2">
            {selectedAnswer === correctAnswer ? "Correct! 🎉" : "Incorrect 😔"}
          </h4>
          <p className="mb-2">
            <strong>Answer:</strong> {correctAnswer}
          </p>
          <p className="text-sm leading-relaxed">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
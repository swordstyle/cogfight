"use client";

import { useState } from "react";
import { PostComponent } from "@/components/PostComponent";
import { QuizComponent } from "@/components/QuizComponent";
import { ShareComponent } from "@/components/ShareComponent";
import { biasPosts } from "@/data/biases";

export default function Home() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const currentPost = biasPosts[currentPostIndex];

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(true);
    setTotalAttempts(prev => prev + 1);
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleTryAnother = () => {
    if (currentPostIndex + 1 >= biasPosts.length) {
      // Game completed
      return;
    }
    const nextIndex = currentPostIndex + 1;
    setCurrentPostIndex(nextIndex);
    setAnswered(false);
    setShowQuiz(true);
  };

  const isGameComplete = currentPostIndex + 1 >= biasPosts.length && answered;
  const finalScore = Math.round((correctCount / biasPosts.length) * 100);

  const handleShareFinalScore = () => {
    const shareText = `I just completed the Echo Chamber bias detection challenge! 🧠\n\nFinal Score: ${correctCount}/${biasPosts.length} (${finalScore}%)\n\nCan you spot cognitive biases too? ${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: 'Echo Chamber - Bias Detection Challenge',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Echo Chamber
          </h1>
          <p className="text-gray-400 text-lg">
            Can you spot the cognitive bias? 🧠
          </p>
          {totalAttempts > 0 && (
            <div className="mt-4 text-sm text-gray-300">
              Progress: {currentPostIndex + 1}/{biasPosts.length} • Score: {correctCount}/{totalAttempts} ({Math.round((correctCount / totalAttempts) * 100)}%)
            </div>
          )}
        </header>

        <PostComponent post={currentPost} />

        {showQuiz && (
          <QuizComponent
            options={currentPost.options}
            correctAnswer={currentPost.correctAnswer}
            explanation={currentPost.explanation}
            onAnswer={handleAnswer}
            postId={currentPost.id}
          />
        )}

        {answered && !isGameComplete && (
          <div className="max-w-2xl mx-auto mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleTryAnother}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Next question ({currentPostIndex + 2}/{biasPosts.length}) →
              </button>
              <ShareComponent
                biasName={currentPost.correctAnswer}
                isVisible={answered}
              />
            </div>
          </div>
        )}

        {isGameComplete && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Challenge Complete!
              </h2>
              <div className="text-5xl font-bold text-purple-400 mb-2">
                {finalScore}%
              </div>
              <div className="text-xl text-gray-300 mb-6">
                {correctCount}/{biasPosts.length} biases detected correctly
              </div>

              <div className="mb-6">
                {finalScore >= 90 ? (
                  <div className="text-green-400">🧠 Bias Detection Master!</div>
                ) : finalScore >= 75 ? (
                  <div className="text-blue-400">🎯 Critical Thinking Champion!</div>
                ) : finalScore >= 60 ? (
                  <div className="text-yellow-400">📚 Getting There!</div>
                ) : (
                  <div className="text-orange-400">🔍 Keep Practicing!</div>
                )}
              </div>

              <button
                onClick={handleShareFinalScore}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center mx-auto space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share Your Results</span>
              </button>
            </div>
          </div>
        )}

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Learn to identify cognitive biases in social media posts</p>
          <p className="mt-1">Built with Next.js • Deployed on Vercel</p>
        </footer>
      </div>
    </div>
  );
}
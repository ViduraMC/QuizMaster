import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, Clock, Target } from 'lucide-react';
import { Quiz, QuizResult } from '../types/quiz';
import Question from './Question';
import { saveToLeaderboard } from '../utils/storage';

interface QuizGameProps {
  quiz: Quiz;
  onBackToCategories: () => void;
  onShowLeaderboard: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ quiz, onBackToCategories, onShowLeaderboard }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [startTime, setStartTime] = useState(Date.now());
  const [playerName, setPlayerName] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  useEffect(() => {
    if (!isGameStarted || isAnswered) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, isGameStarted, isAnswered]);

  // Reset timer and answered state when question changes
  useEffect(() => {
    setTimeLeft(30);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    if (isLastQuestion) {
      setTimeout(() => finishQuiz(), 1000);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 1000);
    }
  };

  const handleAnswer = (selectedAnswer: number, isCorrect: boolean) => {
    setIsAnswered(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (isLastQuestion) {
      setTimeout(() => finishQuiz(), 2000);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 2000);
    }
  };

  const finishQuiz = () => {
    setShowResult(true);
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    
    const result: QuizResult = {
      score,
      totalQuestions: quiz.questions.length,
      percentage: Math.round((score / quiz.questions.length) * 100),
      category: quiz.category,
      timeTaken
    };

    // Save to leaderboard if player provided name
    if (playerName.trim()) {
      saveToLeaderboard({
        id: Date.now().toString(),
        name: playerName,
        score,
        percentage: result.percentage,
        category: quiz.category,
        date: new Date().toISOString()
      });
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
    setStartTime(Date.now());
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(30);
    setIsGameStarted(false);
  };

  if (!isGameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
        <div className="max-w-md mx-auto">
          <button
            onClick={onBackToCategories}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Categories
          </button>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">{quiz.icon}</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{quiz.title}</h1>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center text-gray-600">
                <Target className="w-5 h-5 mr-2" />
                {quiz.questions.length} Questions
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                30 seconds per question
              </div>
            </div>
            
            <input
              type="text"
              placeholder="Enter your name (optional)"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            
            <button
              onClick={startGame}
              className={`w-full py-3 rounded-lg font-medium text-white bg-gradient-to-r ${quiz.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const getPerformanceMessage = () => {
      if (percentage >= 80) return { message: "Excellent!", emoji: "🎉", color: "text-green-600" };
      if (percentage >= 60) return { message: "Good Job!", emoji: "👍", color: "text-blue-600" };
      if (percentage >= 40) return { message: "Not Bad!", emoji: "😊", color: "text-yellow-600" };
      return { message: "Keep Trying!", emoji: "💪", color: "text-red-600" };
    };
    
    const performance = getPerformanceMessage();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">{performance.emoji}</div>
            <h1 className={`text-2xl font-bold mb-2 ${performance.color}`}>
              {performance.message}
            </h1>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Score:</span>
                <span className="font-bold text-xl">{score}/{quiz.questions.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Percentage:</span>
                <span className="font-bold text-xl">{percentage}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium">{quiz.category}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={restartQuiz}
                className={`w-full py-3 rounded-lg font-medium text-white bg-gradient-to-r ${quiz.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
              >
                Try Again
              </button>
              <button
                onClick={onShowLeaderboard}
                className="w-full py-3 rounded-lg font-medium text-purple-600 border border-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Trophy className="w-5 h-5 inline mr-2" />
                View Leaderboard
              </button>
              <button
                onClick={onBackToCategories}
                className="w-full py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackToCategories}
            className="flex items-center text-purple-600 hover:text-purple-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Categories
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Trophy className="w-5 h-5 mr-2" />
              Score: {score}/{quiz.questions.length}
            </div>
          </div>
        </div>
        
        <Question
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quiz.questions.length}
          onAnswer={handleAnswer}
          timeLeft={timeLeft}
        />
      </div>
    </div>
  );
};

export default QuizGame;
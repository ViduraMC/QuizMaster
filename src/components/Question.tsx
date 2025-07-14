import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { Question as QuestionType } from '../types/quiz';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
  timeLeft: number;
}

const Question: React.FC<QuestionProps> = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  timeLeft 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setHasAnswered(true);
    
    const isCorrect = answerIndex === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(answerIndex, isCorrect);
    }, 2000);
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return 'border-gray-300 hover:border-purple-400 hover:bg-purple-50';
    }
    
    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50 text-green-800';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'border-red-500 bg-red-50 text-red-800';
    }
    
    return 'border-gray-300 bg-gray-50';
  };

  const getOptionIcon = (index: number) => {
    if (!showResult) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-600" />;
    }
    
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {timeLeft}s
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {question.question}
        </h2>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={hasAnswered}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ${getOptionClass(index)} ${
                hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{option}</span>
                {getOptionIcon(index)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showResult && question.explanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in">
          <h3 className="font-semibold text-blue-800 mb-2">Explanation:</h3>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
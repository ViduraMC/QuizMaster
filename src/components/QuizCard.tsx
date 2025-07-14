import React from 'react';
import { Play, Clock, BarChart } from 'lucide-react';
import { Quiz } from '../types/quiz';

interface QuizCardProps {
  quiz: Quiz;
  onStartQuiz: (quiz: Quiz) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onStartQuiz }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className={`absolute inset-0 bg-gradient-to-br ${quiz.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{quiz.icon}</div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${quiz.color} text-white`}>
            {quiz.questions.length} Questions
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            ~{quiz.questions.length * 30}s
          </div>
          <div className="flex items-center">
            <BarChart className="w-4 h-4 mr-1" />
            Mixed Difficulty
          </div>
        </div>
        
        <button
          onClick={() => onStartQuiz(quiz)}
          className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r ${quiz.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
        >
          <Play className="w-4 h-4 mr-2" />
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Quiz } from '../types/quiz';
import QuizCard from './QuizCard';

interface CategoriesProps {
  categories: Quiz[];
  onBackToHome: () => void;
  onStartQuiz: (quiz: Quiz) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, onBackToHome, onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center text-purple-600 hover:text-purple-800 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Quiz Categories</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onStartQuiz={onStartQuiz}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
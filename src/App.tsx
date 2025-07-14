import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Categories from './components/Categories';
import QuizGame from './components/QuizGame';
import Leaderboard from './components/Leaderboard';
import SubmitQuestion from './components/SubmitQuestion';
import { quizCategories } from './data/quizData';
import { Quiz } from './types/quiz';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedQuiz(null);
  };

  const handleStartQuiz = (quiz?: Quiz) => {
    if (quiz) {
      setSelectedQuiz(quiz);
      setCurrentPage('quiz');
    } else {
      setCurrentPage('categories');
    }
  };

  const handleBackToCategories = () => {
    setCurrentPage('categories');
    setSelectedQuiz(null);
  };

  const handleShowLeaderboard = () => {
    setCurrentPage('leaderboard');
    setSelectedQuiz(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onStartQuiz={() => handleStartQuiz()} />;
      
      case 'play':
      case 'categories':
        return (
          <Categories
            categories={quizCategories}
            onBackToHome={() => handleNavigation('home')}
            onStartQuiz={handleStartQuiz}
          />
        );
      
      case 'quiz':
        return selectedQuiz ? (
          <QuizGame
            quiz={selectedQuiz}
            onBackToCategories={handleBackToCategories}
            onShowLeaderboard={handleShowLeaderboard}
          />
        ) : (
          <Categories
            categories={quizCategories}
            onBackToHome={() => handleNavigation('home')}
            onStartQuiz={handleStartQuiz}
          />
        );
      
      case 'leaderboard':
        return <Leaderboard onBackToHome={() => handleNavigation('home')} />;
      
      case 'submit':
        return <SubmitQuestion onBackToHome={() => handleNavigation('home')} />;
      
      default:
        return <Hero onStartQuiz={() => handleStartQuiz()} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
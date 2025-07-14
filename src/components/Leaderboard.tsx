import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Crown, ArrowLeft, Filter } from 'lucide-react';
import { LeaderboardEntry } from '../types/quiz';
import { getLeaderboard } from '../utils/storage';

interface LeaderboardProps {
  onBackToHome: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ onBackToHome }) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  useEffect(() => {
    setEntries(getLeaderboard());
  }, []);

  const filteredEntries = selectedCategory === 'all' 
    ? entries 
    : entries.filter(entry => entry.category === selectedCategory);

  const categories = ['all', ...new Set(entries.map(entry => entry.category))];

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 1: return <Medal className="w-6 h-6 text-gray-400" />;
      case 2: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">{index + 1}</span>;
    }
  };

  const getRankClass = (index: number) => {
    switch (index) {
      case 0: return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white';
      case 1: return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white';
      case 2: return 'bg-gradient-to-r from-amber-400 to-orange-500 text-white';
      default: return 'bg-white border border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center text-purple-600 hover:text-purple-800 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-yellow-500" />
            Leaderboard
          </h1>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Categories</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Leaderboard Entries */}
        <div className="space-y-3">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Scores Yet</h3>
              <p className="text-gray-500">Be the first to complete a quiz and make it to the leaderboard!</p>
            </div>
          ) : (
            filteredEntries.map((entry, index) => (
              <div
                key={entry.id}
                className={`p-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg ${getRankClass(index)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getRankIcon(index)}
                    <div>
                      <h3 className="font-semibold text-lg">{entry.name}</h3>
                      <p className={`text-sm ${index < 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        {entry.category}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold">{entry.score}</div>
                    <div className={`text-sm ${index < 3 ? 'text-white/80' : 'text-gray-600'}`}>
                      {entry.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
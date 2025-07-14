import React, { useState } from 'react';
import { ArrowLeft, Plus, CheckCircle, X } from 'lucide-react';
import { UserSubmission } from '../types/quiz';
import { saveUserSubmission } from '../utils/storage';

interface SubmitQuestionProps {
  onBackToHome: () => void;
}

const SubmitQuestion: React.FC<SubmitQuestionProps> = ({ onBackToHome }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [category, setCategory] = useState('General Knowledge');
  const [submittedBy, setSubmittedBy] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = ['General Knowledge', 'Movies', 'Sports', 'Science'];

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim() || !submittedBy.trim() || options.some(opt => !opt.trim())) {
      alert('Please fill in all fields');
      return;
    }

    const submission: UserSubmission = {
      id: Date.now().toString(),
      question: question.trim(),
      options: options.map(opt => opt.trim()),
      correctAnswer,
      category,
      submittedBy: submittedBy.trim(),
      status: 'pending',
      date: new Date().toISOString()
    };

    saveUserSubmission(submission);
    setShowSuccess(true);
    
    // Reset form
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer(0);
    setSubmittedBy('');
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center text-purple-600 hover:text-purple-800 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Plus className="w-8 h-8 mr-3 text-purple-600" />
            Submit a Question
          </h1>
        </div>

        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Question submitted successfully! It will be reviewed before being added to the quiz.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={submittedBy}
              onChange={(e) => setSubmittedBy(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
              placeholder="Enter your question here..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer Options
            </label>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={correctAnswer === index}
                    onChange={() => setCorrectAnswer(index)}
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                  {correctAnswer === index && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Select the radio button next to the correct answer
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitQuestion;
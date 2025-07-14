export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: Question[];
  icon: string;
  color: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  category: string;
  timeTaken: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  percentage: number;
  category: string;
  date: string;
}

export interface UserSubmission {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  submittedBy: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}
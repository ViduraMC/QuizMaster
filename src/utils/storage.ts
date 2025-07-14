import { LeaderboardEntry, UserSubmission } from '../types/quiz';

export const saveToLeaderboard = (entry: LeaderboardEntry): void => {
  const leaderboard = getLeaderboard();
  leaderboard.push(entry);
  
  // Sort by score (descending) and keep top 10
  leaderboard.sort((a, b) => b.score - a.score);
  const topEntries = leaderboard.slice(0, 10);
  
  localStorage.setItem('quizLeaderboard', JSON.stringify(topEntries));
};

export const getLeaderboard = (): LeaderboardEntry[] => {
  const stored = localStorage.getItem('quizLeaderboard');
  return stored ? JSON.parse(stored) : [];
};

export const saveUserSubmission = (submission: UserSubmission): void => {
  const submissions = getUserSubmissions();
  submissions.push(submission);
  localStorage.setItem('userSubmissions', JSON.stringify(submissions));
};

export const getUserSubmissions = (): UserSubmission[] => {
  const stored = localStorage.getItem('userSubmissions');
  return stored ? JSON.parse(stored) : [];
};
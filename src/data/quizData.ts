import { Quiz } from '../types/quiz';

export const quizCategories: Quiz[] = [
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    description: 'Test your knowledge across various topics',
    category: 'General Knowledge',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    questions: [
      {
        id: 'gk1',
        question: 'What is the capital of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
        correctAnswer: 2,
        category: 'General Knowledge',
        difficulty: 'medium',
        explanation: 'Canberra is the capital city of Australia, located in the Australian Capital Territory.'
      },
      {
        id: 'gk2',
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1,
        category: 'General Knowledge',
        difficulty: 'easy',
        explanation: 'Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.'
      },
      {
        id: 'gk3',
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 3,
        category: 'General Knowledge',
        difficulty: 'easy',
        explanation: 'The Pacific Ocean is the largest ocean, covering about 46% of the world\'s water surface.'
      },
      {
        id: 'gk4',
        question: 'Who wrote the novel "1984"?',
        options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'H.G. Wells'],
        correctAnswer: 1,
        category: 'General Knowledge',
        difficulty: 'medium',
        explanation: 'George Orwell wrote "1984", a dystopian novel published in 1949.'
      },
      {
        id: 'gk5',
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correctAnswer: 2,
        category: 'General Knowledge',
        difficulty: 'medium',
        explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum".'
      }
    ]
  },
  {
    id: 'movies',
    title: 'Movies',
    description: 'Test your knowledge of films and cinema',
    category: 'Movies',
    icon: '🎬',
    color: 'from-red-500 to-orange-500',
    questions: [
      {
        id: 'mv1',
        question: 'Which movie won the Academy Award for Best Picture in 2020?',
        options: ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'],
        correctAnswer: 2,
        category: 'Movies',
        difficulty: 'medium',
        explanation: 'Parasite won the Academy Award for Best Picture in 2020, making history as the first non-English language film to win.'
      },
      {
        id: 'mv2',
        question: 'Who directed the movie "Inception"?',
        options: ['Steven Spielberg', 'Christopher Nolan', 'Martin Scorsese', 'Quentin Tarantino'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'easy',
        explanation: 'Christopher Nolan directed Inception, released in 2010.'
      },
      {
        id: 'mv3',
        question: 'In which movie does Tom Hanks play a character named Forrest?',
        options: ['Cast Away', 'Philadelphia', 'Forrest Gump', 'Big'],
        correctAnswer: 2,
        category: 'Movies',
        difficulty: 'easy',
        explanation: 'Tom Hanks played Forrest Gump in the 1994 film of the same name.'
      },
      {
        id: 'mv4',
        question: 'What is the highest-grossing film of all time?',
        options: ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars: The Force Awakens'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'medium',
        explanation: 'Avengers: Endgame is the highest-grossing film of all time with over $2.7 billion worldwide.'
      },
      {
        id: 'mv5',
        question: 'Which actress played Katniss Everdeen in The Hunger Games?',
        options: ['Emma Stone', 'Jennifer Lawrence', 'Scarlett Johansson', 'Emma Watson'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'easy',
        explanation: 'Jennifer Lawrence played Katniss Everdeen in The Hunger Games film series.'
      }
    ]
  },
  {
    id: 'sports',
    title: 'Sports',
    description: 'Challenge yourself with sports trivia',
    category: 'Sports',
    icon: '⚽',
    color: 'from-green-500 to-blue-500',
    questions: [
      {
        id: 'sp1',
        question: 'How many players are on a basketball team on the court at one time?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        category: 'Sports',
        difficulty: 'easy',
        explanation: 'Each basketball team has 5 players on the court at one time.'
      },
      {
        id: 'sp2',
        question: 'Which country has won the most FIFA World Cups?',
        options: ['Germany', 'Argentina', 'Brazil', 'Italy'],
        correctAnswer: 2,
        category: 'Sports',
        difficulty: 'medium',
        explanation: 'Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002).'
      },
      {
        id: 'sp3',
        question: 'What is the maximum score possible in ten-pin bowling?',
        options: ['200', '250', '300', '350'],
        correctAnswer: 2,
        category: 'Sports',
        difficulty: 'medium',
        explanation: 'The maximum score in ten-pin bowling is 300, achieved by bowling 12 consecutive strikes.'
      },
      {
        id: 'sp4',
        question: 'Which sport is known as "The Beautiful Game"?',
        options: ['Basketball', 'Tennis', 'Football/Soccer', 'Golf'],
        correctAnswer: 2,
        category: 'Sports',
        difficulty: 'easy',
        explanation: 'Football (soccer) is often referred to as "The Beautiful Game".'
      },
      {
        id: 'sp5',
        question: 'How often are the Summer Olympic Games held?',
        options: ['Every 2 years', 'Every 4 years', 'Every 5 years', 'Every 6 years'],
        correctAnswer: 1,
        category: 'Sports',
        difficulty: 'easy',
        explanation: 'The Summer Olympic Games are held every 4 years.'
      }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    description: 'Explore the wonders of scientific knowledge',
    category: 'Science',
    icon: '🔬',
    color: 'from-blue-500 to-purple-500',
    questions: [
      {
        id: 'sc1',
        question: 'What is the speed of light in vacuum?',
        options: ['299,792,458 m/s', '300,000,000 m/s', '299,000,000 m/s', '301,000,000 m/s'],
        correctAnswer: 0,
        category: 'Science',
        difficulty: 'hard',
        explanation: 'The speed of light in vacuum is exactly 299,792,458 meters per second.'
      },
      {
        id: 'sc2',
        question: 'What is the chemical formula for water?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correctAnswer: 0,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'Water has the chemical formula H2O, consisting of two hydrogen atoms and one oxygen atom.'
      },
      {
        id: 'sc3',
        question: 'Which organ in the human body produces insulin?',
        options: ['Liver', 'Kidney', 'Pancreas', 'Heart'],
        correctAnswer: 2,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'The pancreas produces insulin, a hormone that regulates blood sugar levels.'
      },
      {
        id: 'sc4',
        question: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
        correctAnswer: 2,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'Diamond is the hardest natural substance on Earth, rating 10 on the Mohs scale.'
      },
      {
        id: 'sc5',
        question: 'How many bones are in an adult human body?',
        options: ['196', '206', '216', '226'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'An adult human body has 206 bones.'
      }
    ]
  }
];
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
      },
      {
        id: 'gk6',
        question: 'Which country has the most time zones?',
        options: ['Russia', 'United States', 'China', 'Canada'],
        correctAnswer: 0,
        category: 'General Knowledge',
        difficulty: 'hard',
        explanation: 'Russia spans 11 time zones, making it the country with the most time zones in the world.'
      },
      {
        id: 'gk7',
        question: 'What is the smallest country in the world?',
        options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
        correctAnswer: 1,
        category: 'General Knowledge',
        difficulty: 'medium',
        explanation: 'Vatican City is the smallest country in the world with an area of just 0.17 square miles.'
      },
      {
        id: 'gk8',
        question: 'Which element has the atomic number 1?',
        options: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'],
        correctAnswer: 1,
        category: 'General Knowledge',
        difficulty: 'easy',
        explanation: 'Hydrogen has the atomic number 1, making it the lightest and most abundant element in the universe.'
      },
      {
        id: 'gk9',
        question: 'What is the longest river in the world?',
        options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],
        correctAnswer: 1,
        category: 'General Knowledge',
        difficulty: 'medium',
        explanation: 'The Nile River is the longest river in the world, stretching approximately 4,135 miles.'
      },
      {
        id: 'gk10',
        question: 'Which year did World War II end?',
        options: ['1944', '1945', '1946', '1947'],
        correctAnswer: 1,
        category: 'General Knowledge',
        difficulty: 'easy',
        explanation: 'World War II ended in 1945 with the surrender of Japan in September.'
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
      },
      {
        id: 'mv6',
        question: 'Which movie features the quote "May the Force be with you"?',
        options: ['Star Trek', 'Star Wars', 'Guardians of the Galaxy', 'Interstellar'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'easy',
        explanation: 'The famous quote "May the Force be with you" is from the Star Wars franchise.'
      },
      {
        id: 'mv7',
        question: 'Who played the Joker in "The Dark Knight"?',
        options: ['Jack Nicholson', 'Joaquin Phoenix', 'Heath Ledger', 'Jared Leto'],
        correctAnswer: 2,
        category: 'Movies',
        difficulty: 'medium',
        explanation: 'Heath Ledger played the Joker in The Dark Knight (2008) and won a posthumous Academy Award for the role.'
      },
      {
        id: 'mv8',
        question: 'Which animated movie features the song "Let It Go"?',
        options: ['Moana', 'Frozen', 'Tangled', 'The Little Mermaid'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'easy',
        explanation: '"Let It Go" is the famous song from Disney\'s Frozen, performed by Idina Menzel.'
      },
      {
        id: 'mv9',
        question: 'What is the name of the coffee shop in the TV show "Friends"?',
        options: ['Central Perk', 'The Grind', 'Java Joe\'s', 'Coffee Bean'],
        correctAnswer: 0,
        category: 'Movies',
        difficulty: 'medium',
        explanation: 'Central Perk is the iconic coffee shop where the Friends characters frequently hang out.'
      },
      {
        id: 'mv10',
        question: 'Which director is known for movies like "Pulp Fiction" and "Kill Bill"?',
        options: ['Martin Scorsese', 'Quentin Tarantino', 'Steven Spielberg', 'Christopher Nolan'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'medium',
        explanation: 'Quentin Tarantino is the acclaimed director known for his distinctive style in films like Pulp Fiction and Kill Bill.'
      },
      {
        id: 'mv11',
        question: 'In "The Matrix", what color pill does Neo take?',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correctAnswer: 1,
        category: 'Movies',
        difficulty: 'easy',
        explanation: 'Neo takes the red pill to learn the truth about the Matrix.'
      },
      {
        id: 'mv12',
        question: 'Which movie won the first ever Academy Award for Best Picture?',
        options: ['Wings', 'Sunrise', 'The Jazz Singer', 'Metropolis'],
        correctAnswer: 0,
        category: 'Movies',
        difficulty: 'hard',
        explanation: 'Wings won the first Academy Award for Best Picture at the 1929 ceremony.'
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
      },
      {
        id: 'sp6',
        question: 'In which sport would you perform a slam dunk?',
        options: ['Volleyball', 'Basketball', 'Tennis', 'Badminton'],
        correctAnswer: 1,
        category: 'Sports',
        difficulty: 'easy',
        explanation: 'A slam dunk is a basketball move where a player jumps and scores by putting the ball directly through the hoop.'
      },
      {
        id: 'sp7',
        question: 'What is the length of a marathon race?',
        options: ['24.2 miles', '25.2 miles', '26.2 miles', '27.2 miles'],
        correctAnswer: 2,
        category: 'Sports',
        difficulty: 'medium',
        explanation: 'A marathon is 26.2 miles (42.195 kilometers) long.'
      },
      {
        id: 'sp8',
        question: 'Which tennis tournament is played on clay courts?',
        options: ['Wimbledon', 'US Open', 'French Open', 'Australian Open'],
        correctAnswer: 2,
        category: 'Sports',
        difficulty: 'medium',
        explanation: 'The French Open (Roland Garros) is the only Grand Slam tournament played on clay courts.'
      },
      {
        id: 'sp9',
        question: 'In American football, how many points is a touchdown worth?',
        options: ['3', '6', '7', '8'],
        correctAnswer: 1,
        category: 'Sports',
        difficulty: 'easy',
        explanation: 'A touchdown is worth 6 points, with the option to kick for an extra point or attempt a 2-point conversion.'
      },
      {
        id: 'sp10',
        question: 'Which athlete has won the most Olympic gold medals?',
        options: ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Mark Spitz'],
        correctAnswer: 1,
        category: 'Sports',
        difficulty: 'medium',
        explanation: 'Michael Phelps has won 23 Olympic gold medals, the most in Olympic history.'
      },
      {
        id: 'sp11',
        question: 'What is the diameter of a basketball hoop?',
        options: ['16 inches', '18 inches', '20 inches', '22 inches'],
        correctAnswer: 1,
        category: 'Sports',
        difficulty: 'hard',
        explanation: 'A basketball hoop has a diameter of 18 inches.'
      },
      {
        id: 'sp12',
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: ['China', 'United Kingdom', 'Brazil', 'Russia'],
        correctAnswer: 2,
        category: 'Sports',
        difficulty: 'easy',
        explanation: 'Brazil hosted the 2016 Summer Olympics in Rio de Janeiro.'
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
      },
      {
        id: 'sc6',
        question: 'What gas makes up approximately 78% of Earth\'s atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere, while oxygen makes up about 21%.'
      },
      {
        id: 'sc7',
        question: 'What is the smallest unit of matter?',
        options: ['Molecule', 'Atom', 'Proton', 'Electron'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'An atom is the smallest unit of matter that retains the properties of an element.'
      },
      {
        id: 'sc8',
        question: 'Which scientist developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'Albert Einstein developed both the special and general theories of relativity.'
      },
      {
        id: 'sc9',
        question: 'What is the pH level of pure water?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'Pure water has a pH of 7, which is considered neutral on the pH scale.'
      },
      {
        id: 'sc10',
        question: 'Which planet is closest to the Sun?',
        options: ['Venus', 'Mercury', 'Earth', 'Mars'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'Mercury is the closest planet to the Sun in our solar system.'
      },
      {
        id: 'sc11',
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
        correctAnswer: 2,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'Mitochondria are known as the powerhouse of the cell because they produce ATP, the cell\'s energy currency.'
      },
      {
        id: 'sc12',
        question: 'What is the study of earthquakes called?',
        options: ['Geology', 'Seismology', 'Meteorology', 'Volcanology'],
        correctAnswer: 1,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'Seismology is the scientific study of earthquakes and the propagation of elastic waves through the Earth.'
      },
      {
        id: 'sc13',
        question: 'Which blood type is known as the universal donor?',
        options: ['A', 'B', 'AB', 'O'],
        correctAnswer: 3,
        category: 'Science',
        difficulty: 'medium',
        explanation: 'Type O blood is considered the universal donor because it can be given to people with any blood type.'
      },
      {
        id: 'sc14',
        question: 'What is the largest organ in the human body?',
        options: ['Liver', 'Brain', 'Skin', 'Lungs'],
        correctAnswer: 2,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'The skin is the largest organ in the human body, covering the entire surface area.'
      },
      {
        id: 'sc15',
        question: 'At what temperature does water boil at sea level?',
        options: ['90°C', '95°C', '100°C', '105°C'],
        correctAnswer: 2,
        category: 'Science',
        difficulty: 'easy',
        explanation: 'Water boils at 100°C (212°F) at sea level under standard atmospheric pressure.'
      }
    ]
  }
];
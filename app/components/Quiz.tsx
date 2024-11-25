'use client';
import React, { useState, useEffect } from 'react';

type Question = {
  question: string;
  options: string[];
  answer: string;
  fact: string;
};

const quizQuestions: Question[] = [
  {
    question: 'What is Barah Valley best known for?',
    options: ['Beaches', 'Mountains', 'Forests', 'Deserts'],
    answer: 'Mountains',
    fact: 'Barah Valley is surrounded by stunning mountain ranges that are popular among hikers and nature enthusiasts.',
  },
  {
    question: 'Which cultural group primarily resides in Barah Valley?',
    options: ['Balti', 'Punjabi', 'Sindhi', 'Pashtun'],
    answer: 'Balti',
    fact: 'The Balti people have a rich cultural heritage, known for their hospitality and traditional Balti cuisine.',
  },
  {
    question: 'What is the famous traditional dish of Barah Valley?',
    options: ['Pulao', 'Balay', 'Chapli Kebab', 'Sajji'],
    answer: 'Balay',
    fact: 'Balay is a hearty noodle soup that is a staple dish in Balti cuisine.',
  },
];

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15); // Timer for each question
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleNextQuestion(); // Auto-move to next question if time runs out
    }
  }, [timer]);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Wrong!');
    }
    setTimeout(() => handleNextQuestion(), 2000); // Show feedback for 2 seconds
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(15); // Reset timer
      setFeedback(null);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(15);
    setShowResults(false);
    setFeedback(null);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="py-10 px-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Barah Valley Quiz</h1>
      <div className="w-full max-w-3xl">
        {showResults ? (
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Quiz Results</h2>
            <p className="text-lg mb-4">You scored {score} out of {quizQuestions.length}!</p>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative mb-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-600 mt-1">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </p>
            </div>
            <h2 className="text-2xl font-semibold mb-6">
              {quizQuestions[currentQuestionIndex].question}
            </h2>
            <div className="grid gap-4">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-lg mt-6 text-gray-700">{feedback}</p>
            {feedback && (
              <p className="text-sm mt-2 text-blue-700 italic">
                Fun Fact: {quizQuestions[currentQuestionIndex].fact}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
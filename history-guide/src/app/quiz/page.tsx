"use client";
import React, { useState } from 'react';
import quizData from '@/data/quizQuestions';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (selectedOption: string) => {
        if (selectedOption === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setAnswered(true);
    };

    const nextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswered(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setAnswered(false);
        setQuizCompleted(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-8 border rounded-lg">
                <h1 className="text-2xl mb-4">Quiz</h1>
                {!quizCompleted && (
                    <>
                        {!answered && (
                            <div>
                                <p className="mb-4">Question {currentQuestion + 1} of {quizData.length}</p>
                                <p className="mb-4">{quizData[currentQuestion].question}</p>
                                <ul>
                                    {quizData[currentQuestion].options.map((option, index) => (
                                        <li key={index} className="mb-2">
                                            <input
                                                type="radio"
                                                id={`option-${index}`}
                                                name="answer"
                                                value={option}
                                                onChange={() => handleAnswer(option)}
                                            />
                                            <label htmlFor={`option-${index}`} className="ml-2">{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {answered && (
                            <div className="mb-4">
                                <p>Your answer is submitted!</p>
                                <button className="mt-4 bg-slate-700 text-white py-2 px-4 rounded" onClick={nextQuestion}>
                                    {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next Question'}
                                </button>
                            </div>
                        )}
                        <p className="mt-4">Score: {score} / {quizData.length}</p>
                    </>
                )}
                {quizCompleted && (
                    <div>
                        <p>Quiz completed!</p>
                        <p>Total Score: {score} / {quizData.length}</p>
                        <p>Percentage: {(score / quizData.length) * 100}%</p>
                        <p>Correct Answers: {score}</p>
                        <p>Wrong Answers: {quizData.length - score}</p>
                        <button className="mt-4 bg-slate-700 text-white py-2 px-4 rounded" onClick={resetQuiz}>Restart Quiz</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
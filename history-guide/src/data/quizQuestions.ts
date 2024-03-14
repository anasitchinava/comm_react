export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

const quizData: QuizQuestion[] = [
    {
        question: "In which year did World War I begin?",
        options: ["1914", "1916", "1918", "1920"],
        correctAnswer: "1914"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
        correctAnswer: "George Washington"
    },
    {
        question: "Which ancient civilization built the Machu Picchu complex?",
        options: ["Maya", "Aztec", "Inca", "Egyptian"],
        correctAnswer: "Inca"
    },
    {
        question: "Which city is famous for its ancient amphitheater known as the Colosseum?",
        options: ["Athens", "Rome", "Istanbul", "Cairo"],
        correctAnswer: "Rome"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Angela Merkel"],
        correctAnswer: "Margaret Thatcher"
    }
];

export default quizData;

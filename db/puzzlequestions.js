const puzzleQuestions = [
    {
        question: "(13,18 = 31)  (7,25 = 32)  (12,30 = 42)  (26,13 = ?)",
        description: "Add",
        answers: [
            { text: "41", correct: false },
            { text: "36", correct: false },
            { text: "39", correct: true },
            { text: "44", correct: false }
        ]
    },
    {
        question: "(4,8 = 32)  (5,3 = 15)  (10,2 = 20)  (8,6 = ?)",
        description: "Multiply",
        answers: [
            { text: "48", correct: true },
            { text: "50", correct: false },
            { text: "45", correct: false },
            { text: "54", correct: false },
        ]
    },
    {
        question: "(8 = 72)  (2 = 6)  (5 = 30)  (9 = ?)",
        description: "Add 1 then multiply",
        answers: [
            { text: "89", correct: false },
            { text: "90", correct: true },
            { text: "88", correct: false },
            { text: "91", correct: false },
        ]
    },
    {
        question: "(8 = 17)  (22 = 45)  (15 = 31)  (20 = ?)",
        description: "Multiply by 2 then add 1",
        answers: [
            { text: "43", correct: false },
            { text: "39", correct: false },
            { text: "47", correct: false },
            { text: "41", correct: true },
        ]
    },
    {
        question: "(6,5 = 33)  (7,2 = 17)  (11,4 = 47)  (3,8 = ?)",
        description: "Multiply then add 3",
        answers: [
            { text: "27", correct: true },
            { text: "30", correct: false },
            { text: "25", correct: false },
            { text: "33", correct: false },
        ]
    },
    {
        question: "(83 = 40)  (27 = 2)  (19 = 8)  (91 = ?)",
        description: "Subtract 3, Divide by 2",
        answers: [
            { text: "44", correct: true },
            { text: "47", correct: false },
            { text: "41", correct: false },
            { text: "50", correct: false }
        ]
    },
    {
        question: "(4,2 = 36)  (3,7 = 100)  (5,4 = 81)  (1,6 = ?)",
        description: "Add numbers, multiply",
        answers: [
            { text: "52", correct: false },
            { text: "49", correct: true },
            { text: "45", correct: false },
            { text: "55", correct: false }
        ]
    },
    {
        question: "(5,3 = 28)  (7,6 = 55)  (4,5 = 21)  (3,8 = ?)",
        description: "The square of the first number, add the second number",
        answers: [
            { text: "16", correct: false },
            { text: "15", correct: false },
            { text: "18", correct: false },
            { text: "17", correct: true },
        ]
    }
];

export default puzzleQuestions;

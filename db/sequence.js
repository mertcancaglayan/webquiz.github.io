
const sequenceList = [
    {
        question: "6, 18, 54, 162, ?",
        description: "Multiply by 3",
        answers: [
            { text: "324", correct: false },
            { text: "243", correct: false },
            { text: "486", correct: true },
            { text: "81", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "1, 1, 2, 3, 5, 8, ?",
        description: "Fibonacci sequence",
        answers: [
            { text: "21", correct: false },
            { text: "34", correct: false },
            { text: "13", correct: true },
            { text: "55", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "6, 10, 14, 18, ?",
        description: "4",
        answers: [
            { text: "26", correct: false },
            { text: "22", correct: true },
            { text: "30", correct: false },
            { text: "34", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "2, 5, 10, 20, ?",
        description: "Double",
        answers: [
            { text: "40", correct: true },
            { text: "30", correct: false },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "7, 14, 28, 56, ?",
        description: "Double",
        answers: [
            { text: "100", correct: false },
            { text: "98", correct: false },
            { text: "84", correct: false },
            { text: "112", correct: true },
        ],
        difficulty: "easy"
    },
    {
        question: "9, 15, 23, 37, 59, ?",
        description: "Add the previous number",
        answers: [
            { text: "74", correct: false },
            { text: "96", correct: true },
            { text: "82", correct: false },
            { text: "112", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "5, 9, 14, 20, ?",
        description: "Alternate by adding - Ascending Order",
        answers: [
            { text: "22", correct: false },
            { text: "27", correct: true },
            { text: "32", correct: false },
            { text: "19", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "2, 7, 14, 23, ?",
        description: "Alternate by adding - Ascending Order",
        answers: [
            { text: "33", correct: true },
            { text: "37", correct: false },
            { text: "40", correct: false },
            { text: "28", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "10, 10, 9, 11, 8, 12, ?",
        description: "Alternate between adding and subtracting the sequence number",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "8", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "11, 12, 14, 17, ?",
        description: "Alternate by adding - Ascending Order",
        answers: [
            { text: "22", correct: false },
            { text: "21", correct: true },
            { text: "24", correct: false },
            { text: "18", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "2, 5, 10, 17, ?",
        description: "Squared the number, add 1",
        answers: [
            { text: "18", correct: false },
            { text: "25", correct: false },
            { text: "26", correct: true },
            { text: "30", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "1, 8, 27, 64, ?",
        description: "Raise the sequence number to the power of 3",
        answers: [
            { text: "216", correct: false },
            { text: "343", correct: false },
            { text: "125", correct: true },
            { text: "512", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "2, 4, 6, 8, 10, ?",
        description: "The sequence increments by 2 each time.",
        answers: [
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
            { text: "18", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "2, 12, 30, 56, ?",
        description: "a*b, c*d",
        answers: [
            { text: "70", correct: false },
            { text: "80", correct: false },
            { text: "100", correct: false },
            { text: "90", correct: true },
        ],
        difficulty: "easy"
    },
    {
        question: "1, 4, 9, 16, 25, ?",
        description: "The sequence increments by the odd numbers",
        answers: [
            { text: "36", correct: true },
            { text: "49", correct: false },
            { text: "64", correct: false },
            { text: "81", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "1, 3, 6, 10, 15, ?",
        description: "The sequence increments by 1, then 2, then 3 ...",
        answers: [
            { text: "21", correct: true },
            { text: "28", correct: false },
            { text: "36", correct: false },
            { text: "45", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "2, 4, 8, 16, 32, ?",
        description: "The sequence doubles each time",
        answers: [
            { text: "64", correct: true },
            { text: "48", correct: false },
            { text: "72", correct: false },
            { text: "80", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "1, 4, 7, 10, ?, 13, 16",
        description: "The sequence increases by 3, then 6, then 3 again",
        answers: [
            { text: "11", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "0, 1, 3, 6, 10, ?",
        description: "The sequence increments by 1, then 2, then 3 ...",
        answers: [
            { text: "21", correct: false },
            { text: "22", correct: false },
            { text: "28", correct: false },
            { text: "15", correct: true },
        ],
        difficulty: "easy"
    },
    {
        question: "1, 4, 9, 16, ?, 36",
        description: "This sequence involves squaring natural numbers",
        answers: [
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "42", correct: false },
            { text: "49", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "3, 6, 12, 24, 48, ?",
        description: "Each number in the sequence is double the previous number.",
        answers: [
            { text: "64", correct: false },
            { text: "128", correct: false },
            { text: "96", correct: true },
            { text: "72", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "1, 1, 2, 3, 5, ?",
        description: "Fibonacci sequence",
        answers: [
            { text: "10", correct: false },
            { text: "13", correct: false },
            { text: "21", correct: false },
            { text: "8", correct: true },
        ],
        difficulty: "easy"
    },
    {
        question: "4, 5, 7, 10, ?",
        description: "The sequence increments by 1, then 2, then 3 ...",
        answers: [
            { text: "12", correct: false },
            { text: "15", correct: false },
            { text: "13", correct: false },
            { text: "14", correct: true },
        ],
        difficulty: "easy"
    },
    {
        question: "4, 12, 36, 108, ?",
        description: "Multiply by 3",
        answers: [
            { text: "216", correct: false },
            { text: "432", correct: false },
            { text: "648", correct: false },
            { text: "324", correct: true },
        ],
        difficulty: "easy"
    },
    {
        question: "2, 5, ?, 11, 14, 17",
        description: "The sequence increases by 3, then 6, then 3 again.",
        answers: [
            { text: "10", correct: false },
            { text: "8", correct: true },
            { text: "13", correct: false },
            { text: "20", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "3, 7, 15, 31, ?, 127",
        description: "The sequence doubles and adds 1 each time",
        answers: [
            { text: "63", correct: true },
            { text: "67", correct: false },
            { text: "71", correct: false },
            { text: "59", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "2, 6, 18, ?, 162, 486",
        description: "The sequence triples each time",
        answers: [
            { text: "54", correct: true },
            { text: "72", correct: false },
            { text: "108", correct: false },
            { text: "216", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "4, 9, 19, ?, 54, 79",
        description: "The sequence increases by 5, then 10, then 15",
        answers: [
            { text: "29", correct: false },
            { text: "34", correct: true },
            { text: "44", correct: false },
            { text: "39", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "1, 4, 7, 10, ?",
        description: "Multiply by 3, then subtract 2",
        answers: [
            { text: "15", correct: false },
            { text: "17", correct: false },
            { text: "13", correct: true },
            { text: "11", correct: false },
        ],
        difficulty: "easy"
    },
    {
        question: "0, 2, 8, 26, 80, ?",
        description: "The sequence multiplies each term by 3, then adds 2",
        answers: [
            { text: "236", correct: false },
            { text: "224", correct: false },
            { text: "242", correct: true },
            { text: "252", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "2, 5, 11, 20, ?, 47",
        description: "The sequence increases by 3, then 6, then 9, then 12",
        answers: [
            { text: "29", correct: true },
            { text: "27", correct: false },
            { text: "32", correct: false },
            { text: "35", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "5, 9, 13, 17, 21, ?",
        description: "The sequence increases by 4 each time.",
        answers: [
            { text: "25", correct: true },
            { text: "28", correct: false },
            { text: "32", correct: false },
            { text: "36", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "27, 38, 51, 66, ?",
        description: "Squared the number, add 2",
        answers: [
            { text: "83", correct: true },
            { text: "92", correct: false },
            { text: "98", correct: false },
            { text: "75", correct: false }
        ],
        difficulty: "easy"
    }
];


export default sequenceList
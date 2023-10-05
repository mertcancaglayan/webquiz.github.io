
const linearEquations = [
    {
        question: "7x+9=23 x=?",
        answers: [
            { text: "5", correct: false },
            { text: "10", correct: false },
            { text: "2", correct: true },
            { text: "15", correct: false }
        ]
    },
    {
        question: "5x+7=42 x=?",
        answers: [
            { text: "12", correct: false },
            { text: "20", correct: false },
            { text: "7", correct: true },
            { text: "28", correct: false }
        ]
    },
    {
        question: "4x+3=51 x=?",
        answers: [
            { text: "12", correct: true },
            { text: "16", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: false }
        ]
    },
    {
        question: "9x+5=41 x=?",
        answers: [
            { text: "8", correct: false },
            { text: "4", correct: true },
            { text: "12", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        question: "4x+2=34 x=?",
        answers: [
            { text: "12", correct: false },
            { text: "16", correct: false },
            { text: "20", correct: false },
            { text: "8", correct: true },
        ]
    },
    {
        question: "11x+3=36 x=?",
        answers: [
            { text: "6", correct: false },
            { text: "3", correct: true },
            { text: "9", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "9x+9=90 x=?",
        answers: [
            { text: "9", correct: true },
            { text: "18", correct: false },
            { text: "27", correct: false },
            { text: "36", correct: false }
        ]
    },
    {
        question: "7x+5=54 x=?",
        answers: [
            { text: "11", correct: false },
            { text: "15", correct: false },
            { text: "7", correct: true },
            { text: "21", correct: false }
        ]
    },
    {
        question: "6x+7=19 x=?",
        answers: [
            { text: "8", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "2", correct: true },
        ]
    },
    {
        question: "4x+7=11 x=?",
        answers: [
            { text: "3", correct: false },
            { text: "7", correct: false },
            { text: "5", correct: false },
            { text: "1", correct: true },
        ]
    },
    {
        question: "8x+11=99 x=?",
        answers: [
            { text: "15", correct: false },
            { text: "23", correct: false },
            { text: "19", correct: false },
            { text: "11", correct: true },
        ]
    },
    {
        question: "4x+17=49 x=?",
        answers: [
            { text: "16", correct: false },
            { text: "8", correct: true },
            { text: "20", correct: false },
            { text: "12", correct: false },
        ]
    },
    {
        question: "4x-1=31 x=?",
        answers: [
            { text: "20", correct: false },
            { text: "8", correct: true },
            { text: "12", correct: false },
            { text: "16", correct: false },
        ]
    },
    {
        question: "5-x=2 x=?",
        answers: [
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "8+5x=63 x=?",
        answers: [
            { text: "15", correct: false },
            { text: "19", correct: false },
            { text: "11", correct: true },
            { text: "23", correct: false }
        ]
    },
    {
        question: "6x+13=25 x=?",
        answers: [
            { text: "2", correct: true },
            { text: "6", correct: false },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "6x-18=-72 x=?",
        answers: [
            { text: "-6", correct: false },
            { text: "-9", correct: true },
            { text: "-3", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "8x+42=-54 x=?",
        answers: [
            { text: "-9", correct: false },
            { text: "-6", correct: false },
            { text: "-12", correct: true },
            { text: "-3", correct: false }
        ]
    },
    {
        question: "5-2x=15 x=?",
        answers: [
            { text: "-5", correct: true },
            { text: "1", correct: false },
            { text: "-3", correct: false },
            { text: "-1", correct: false },
        ]
    },
    {
        question: "2-3x=14 x=?",
        answers: [
            { text: "2", correct: false },
            { text: "-2", correct: false },
            { text: "0", correct: false },
            { text: "-4", correct: true },
        ]
    },
    {
        question: "4+5x=44 x=?",
        answers: [
            { text: "12", correct: false },
            { text: "16", correct: false },
            { text: "8", correct: true },
            { text: "20", correct: false }
        ]
    },
    {
        question: "53=8x+5 x=?",
        answers: [
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "52=7+15x x=?",
        answers: [
            { text: "5", correct: false },
            { text: "3", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "28=3x+1 x=?",
        answers: [
            { text: "11", correct: false },
            { text: "9", correct: true },
            { text: "13", correct: false },
            { text: "15", correct: false },
        ]
    },
    {
        question: "-29=3+4x x=?",
        answers: [
            { text: "-6", correct: false },
            { text: "-4", correct: false },
            { text: "-8", correct: true },
            { text: "-2", correct: false }
        ]
    },
    {
        question: "6x+13=25 x=?",
        answers: [
            { text: "2", correct: true },
            { text: "14", correct: false },
            { text: "6", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: "34=6-4x x=?",
        answers: [
            { text: "-7", correct: true },
            { text: "-5", correct: false },
            { text: "-1", correct: false },
            { text: "-3", correct: false },
        ]
    },
    {
        question: "7x-6=50 x=?",
        answers: [
            { text: "8", correct: true },
            { text: "20", correct: false },
            { text: "12", correct: false },
            { text: "16", correct: false },
        ]
    },
    {
        question: "17=3+2x x=?",
        answers: [
            { text: "7", correct: true },
            { text: "11", correct: false },
            { text: "9", correct: false },
            { text: "13", correct: false },
        ]
    },
    {
        question: "-3=x-4 x=?",
        answers: [
            { text: "3", correct: false },
            { text: "7", correct: false },
            { text: "1", correct: true },
            { text: "5", correct: false },
        ]
    },
    {
        question: "3(x+2)=15 x=?",
        answers: [
            { text: "5", correct: false },
            { text: "3", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "7(x-4)-3=46 x=?",
        answers: [
            { text: "13", correct: false },
            { text: "11", correct: true },
            { text: "15", correct: false },
            { text: "17", correct: false }
        ]
    },
    {
        question: "2(x+1)3x=37 x=?",
        answers: [
            { text: "9", correct: false },
            { text: "7", correct: true },
            { text: "11", correct: false },
            { text: "13", correct: false }
        ]
    },
    {
        question: "12+4(2x+4)=68 x=?",
        answers: [
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "11", correct: false }
        ]
    },
    {
        question: "9x+2=4x+12 x=?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "2", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "5x+4=31+2x x=?",
        answers: [
            { text: "11", correct: false },
            { text: "13", correct: false },
            { text: "9", correct: true },
            { text: "15", correct: false },
        ]
    },
    {
        question: "20+2x=6+9x=?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false },
            { text: "2", correct: true },
        ]
    },
    {
        question: "5x-3=2x+6 x=?",
        answers: [
            { text: "9", correct: false },
            { text: "5", correct: false },
            { text: "3", correct: true },
            { text: "7", correct: false },
        ]
    },
    {
        question: "5x-6=18-3x x=?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "3", correct: true },
            { text: "9", correct: false },
        ]
    },
    {
        question: "4x-21=6x-3x=?",
        answers: [
            { text: "-6", correct: false },
            { text: "-3", correct: false },
            { text: "0", correct: false },
            { text: "-9", correct: true },
        ]
    },
    {
        question: "12x-5=7x x=?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: true },
        ]
    },
    {
        question: "3x-24=5x x=?",
        answers: [
            { text: "-10", correct: false },
            { text: "-8", correct: false },
            { text: "-6", correct: false },
            { text: "-12", correct: true },
        ]
    },
    {
        question: "4(x+8)=8x x=?",
        answers: [
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "14", correct: false }
        ]
    }
];

export default linearEquations

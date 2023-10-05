
const simultaneousEquations = [
    {
        question: "x+y=8, x-y=6",
        description: "To solve these equations, we can subtract one from the other",
        answers: [
            { text: "6,2", correct: false },
            { text: "7,1", correct: true },
            { text: "5,3", correct: false },
            { text: "8,0", correct: false }
        ]
    },
    {
        question: "2x+y=12, 3x-y=8",
        description: "To solve these equations, we can add the two equations",
        answers: [
            { text: "4,4", correct: true },
            { text: "5,3", correct: false },
            { text: "6,2", correct: false },
            { text: "3,5", correct: false }
        ]
    },
    {
        question: "3x+2y=7, 2x-4y=-6",
        description: "To solve these equations, we can use the elimination method. Let's multiply the first equation by 2 and the second equation by -1",
        answers: [
            { text: "4,-5", correct: false },
            { text: "6,-3", correct: false },
            { text: "5,-4", correct: true },
            { text: "7,-2", correct: false }
        ]
    },
    {
        question: "4x+3y=18, 3x4y=17",
        description: "We can use the elimination method. Multiply the first equation by 4 and the second equation by 3",
        answers: [
            { text: "4,1", correct: false },
            { text: "3,2", correct: true },
            { text: "2,3", correct: false },
            { text: "5,0", correct: false }
        ]
    },
    {
        question: "-x+3y=6, x+4y=15",
        description: "We can use the elimination method. Multiply the first equation by x and the second equation by 3",
        answers: [
            { text: "3,3", correct: true },
            { text: "2,4", correct: false },
            { text: "4,2", correct: false },
            { text: "5,1", correct: false }
        ]
    },
    {
        question: "2x-7y=2, 3x+y=3",
        description: "We can use the elimination method. Multiply the second equation by 7",
        answers: [
            { text: "1,0", correct: true },
            { text: "2,-1", correct: false },
            { text: "0,1", correct: false },
            { text: "3,-2", correct: false }
        ]
    },
    {
        question: "2x+4y=14, 4x-4y=4",
        description: "We can use the elimination method",
        answers: [
            { text: "4,1", correct: false },
            { text: "2,3", correct: false },
            { text: "5,0", correct: false },
            { text: "3,2", correct: true }
        ]
    },
    {
        question: "6x+y=18, 4a+b=14",
        description: "To solve these equations, we can subtract one from the other",
        answers: [
            { text: "3,5", correct: false },
            { text: "1,7", correct: false },
            { text: "4,4", correct: false },
            { text: "2,6", correct: true },
        ]
    },
    {
        question: "3x+2y=36, 5x+4y=64",
        description: "Multiply the first equation by 2 and then subtract one from the other",
        answers: [
            { text: "7,7", correct: false },
            { text: "9,5", correct: false },
            { text: "6,8", correct: false },
            { text: "8,6", correct: true },
        ]
    },
    {
        question: "5x-3y=26, 4x+2y=34",
        description: "The number of y's in both equations can be made the same by multiplying equation (1) by 2 and equation (2) by 3",
        answers: [
            { text: "8,2", correct: false },
            { text: "7,3", correct: true },
            { text: "6,4", correct: false },
            { text: "9,1", correct: false }
        ]
    },
    {
        question: "7x+y=25, 5x-y=11",
        description: "We can use the elimination method by adding the two equations",
        answers: [
            { text: "4,3", correct: false },
            { text: "3,4", correct: true },
            { text: "2,5", correct: false },
            { text: "1,6", correct: false }
        ]
    },
    {
        question: "8x+9y=3, x+y=0",
        description: "We can use the substitution method",
        answers: [
            { text: "-3,3", correct: true },
            { text: "-2,2", correct: false },
            { text: "-4,4", correct: false },
            { text: "-1,1", correct: false }
        ]
    },
    {
        question: "2x+13y=36, 13x+2y=69",
        description: "We can use the elimination method. Multiply the first equation by 13 and the second equation by 2",
        answers: [
            { text: "5,2", correct: true },
            { text: "6,3", correct: false },
            { text: "4,4", correct: false },
            { text: "7,1", correct: false }
        ]
    },
    {
        question: "7x-y=15, 3x-2y=19",
        description: "We can use the elimination method. Multiply the first equation by 2 and the second equation by -1",
        answers: [
            { text: "1,-8", correct: true },
            { text: "2,-7", correct: false },
            { text: "0,-9", correct: false },
            { text: "3,-6", correct: false }
        ]
    },
    {
        question: "x+y=60, x-y=40",
        description: "To solve these equations, we can add the two equations",
        answers: [
            { text: "45,15", correct: false },
            { text: "50,10", correct: true },
            { text: "55,5", correct: false },
            { text: "60,0", correct: false }
        ]
    },
    {
        question: "2x+y=5, -3x+6y=0",
        description: "We can use the substitution method",
        answers: [
            { text: "3,2", correct: false },
            { text: "1,3", correct: false },
            { text: "4,0", correct: false },
            { text: "2,1", correct: true },
        ]
    }
];

export default simultaneousEquations
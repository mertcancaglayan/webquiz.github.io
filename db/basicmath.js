
const basicQuestions = [
     {
         question: "2+2x2=?",
         answers: [
             { text: "4", correct: false },
             { text: "6", correct: true },
             { text: "8", correct: false },
             { text: "10", correct: false }
         ]
     },
     {
         question: "11x11",
         answers: [
             { text: "110", correct: false },
             { text: "121", correct: true },
             { text: "132", correct: false },
             { text: "143", correct: false }
         ]
     },
     {
         question: "18/3",
         answers: [
             { text: "4", correct: false },
             { text: "6", correct: true },
             { text: "8", correct: false },
             { text: "10", correct: false }
         ]
     },
     {
         question: "33x7",
         answers: [
             { text: "196", correct: false },
             { text: "210", correct: false },
             { text: "231", correct: true },
             { text: "252", correct: false }
         ]
     },
     {
         question: "3+7x9/1",
         answers: [
             { text: "15", correct: false },
             { text: "66", correct: true },
             { text: "72", correct: false },
             { text: "81", correct: false }
         ]
     },
     {
         question: "5+4x3/2",
         answers: [
             { text: "6.5", correct: false },
             { text: "7.5", correct: false },
             { text: "10", correct: false },
             { text: "11", correct: true }
         ]
     },
     {
         question: "6-5x4/2",
         answers: [
             { text: "-4", correct: true },
             { text: "0", correct: false },
             { text: "2", correct: false },
             { text: "4", correct: false }
         ]
     },
     {
         question: "2+8x2/4",
         answers: [
             { text: "4", correct: false },
             { text: "6", correct: false },
             { text: "8", correct: false },
             { text: "10", correct: true }
         ]
     },
     {
         question: "1+6x7/3",
         answers: [
             { text: "4", correct: false },
             { text: "8", correct: false },
             { text: "12", correct: false },
             { text: "15", correct: true }
         ]
     },
     {
         question: "9-3x4/2",
         answers: [
             { text: "0", correct: false },
             { text: "2", correct: false },
             { text: "3", correct: true },
             { text: "6", correct: false }
         ]
     },
     {
         question: "4+5x6/2",
         answers: [
             { text: "17", correct: false },
             { text: "18", correct: true },
             { text: "19", correct: false },
             { text: "20", correct: false }
         ]
     },
     {
         question: "7-2x8/4",
         answers: [
             { text: "0", correct: false },
             { text: "1", correct: false },
             { text: "2", correct: false },
             { text: "3", correct: true }
         ]
     },
     {
         question: "3+9x3/3",
         answers: [
             { text: "10", correct: false },
             { text: "11", correct: false },
             { text: "12", correct: true },
             { text: "13", correct: false }
         ]
     },
     {
         question: "8-6x3/3",
         answers: [
             { text: "0", correct: false },
             { text: "2", correct: false },
             { text: "4", correct: true },
             { text: "6", correct: false }
         ]
     },
     {
         question: "2+5x10/2",
         answers: [
             { text: "10", correct: false },
             { text: "15", correct: false },
             { text: "20", correct: false },
             { text: "27", correct: true }
         ]
     },
     {
         question: "4+3(8-2)/2",
         answers: [
             { text: "9", correct: false },
             { text: "10", correct: false },
             { text: "11", correct: true },
             { text: "12", correct: false }
         ]
     },
     {
         question: "What is 15% of 200?",
         answers: [
             { text: "15", correct: false },
             { text: "30", correct: true },
             { text: "45", correct: false },
             { text: "60", correct: false }
         ]
     },
     {
         question: "Increase 5 by 40%",
         answers: [
             { text: "2", correct: false },
             { text: "4", correct: false },
             { text: "7", correct: false },
             { text: "9", correct: true }
         ]
     },
     {
         question: "What is 25% of 80?",
         answers: [
             { text: "15", correct: false },
             { text: "20", correct: true },
             { text: "25", correct: false },
             { text: "30", correct: false }
         ]
     },
     {
         question: "What is 15% of 500?",
         answers: [
             { text: "50", correct: false },
             { text: "75", correct: true },
             { text: "100", correct: false },
             { text: "125", correct: false }
         ]
     },
     {
         question: "What is 70% of 50?",
         answers: [
             { text: "25", correct: false },
             { text: "30", correct: false },
             { text: "35", correct: true },
             { text: "40", correct: false }
         ]
     },
     {
         question: "What is the percentage of 8 out of 20?",
         answers: [
             { text: "20%", correct: false },
             { text: "30%", correct: false },
             { text: "40%", correct: true },
             { text: "50%", correct: false }
         ]
     },
     {
         question: "What is the percentage of 15 out of 30?",
         answers: [
             { text: "30%", correct: false },
             { text: "40%", correct: true },
             { text: "50%", correct: false },
             { text: "60%", correct: false }
         ]
     },
     {
         question: "What is the percentage of 20 out of 50?",
         answers: [
             { text: "20%", correct: false },
             { text: "30%", correct: false },
             { text: "40%", correct: true },
             { text: "50%", correct: false }
         ]
     },
     {
         question: "What is the percentage of 6 out of 15?",
         answers: [
             { text: "20%", correct: false },
             { text: "30%", correct: false },
             { text: "40%", correct: true },
             { text: "50%", correct: false }
         ]
     },
     {
         question: "What is the percentage of 3 out of 5?",
         answers: [
             { text: "40%", correct: true },
             { text: "50%", correct: false },
             { text: "60%", correct: false },
             { text: "70%", correct: false }
         ]
     },
     {
         question: "What is 15% of 80?",
         answers: [
             { text: "10", correct: false },
             { text: "12", correct: true },
             { text: "15", correct: false },
             { text: "18", correct: false }
         ]
     },
     {
         question: "What is 25% of 240?",
         answers: [
             { text: "45", correct: false },
             { text: "60", correct: true },
             { text: "75", correct: false },
             { text: "90", correct: false }
         ]
     },
     {
         question: "If 35% of a number is 42, what is the number?",
         answers: [
             { text: "84", correct: false },
             { text: "100", correct: false },
             { text: "105", correct: true },
             { text: "120", correct: false }
         ]
     },
     {
         question: "What is 65% of 1500?",
         answers: [
             { text: "750", correct: false },
             { text: "975", correct: true },
             { text: "1200", correct: false },
             { text: "1350", correct: false }
         ]
     },
     {
         question: "What is 20% of 80?",
         answers: [
             { text: "10", correct: false },
             { text: "16", correct: true },
             { text: "20", correct: false },
             { text: "25", correct: false }
         ]
     },
     {
         question: "What is 65% of 80?",
         answers: [
             { text: "40", correct: false },
             { text: "52", correct: true },
             { text: "65", correct: false },
             { text: "78", correct: false }
         ]
     },
     {
         question: "What is 75% of 40?",
         answers: [
             { text: "15", correct: false },
             { text: "30", correct: true },
             { text: "35", correct: false },
             { text: "45", correct: false }
         ]
     },
     {
         question: "What is 85% of 40?",
         answers: [
             { text: "25", correct: false },
             { text: "30", correct: false },
             { text: "34", correct: true },
             { text: "38", correct: false }
         ]
     },
     {
         question: "What is 80% of 80?",
         answers: [
             { text: "48", correct: false },
             { text: "60", correct: false },
             { text: "64", correct: true },
             { text: "72", correct: false }
         ]
     },
     {
         question: "What is 90% of 20?",
         answers: [
             { text: "12", correct: false },
             { text: "16", correct: false },
             { text: "18", correct: true },
             { text: "20", correct: false }
         ]
     },
     {
         question: "What is 90% of 60?",
         answers: [
             { text: "45", correct: false },
             { text: "50", correct: false },
             { text: "54", correct: true },
             { text: "60", correct: false }
         ]
     },
     {
         question: "What is 50% of 38?",
         answers: [
             { text: "15", correct: false },
             { text: "19", correct: true },
             { text: "25", correct: false },
             { text: "30", correct: false }
         ]
     },
     {
         question: "What is 60% of 40?",
         answers: [
             { text: "18", correct: false },
             { text: "22", correct: false },
             { text: "24", correct: true },
             { text: "30", correct: false }
         ]
     },
 ];
 

 export default basicQuestions;
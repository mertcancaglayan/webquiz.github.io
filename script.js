import basicQuestions from "./db/basicmath.js";
import sequenceList from "./db/sequence.js";
import linearEquations from "./db/linearequations.js";
import puzzleQuestions from "./db/puzzlequestions.js";
import simultaneousEquations from "./db/simultaneousequations.js";


const basicButton = document.getElementById("basic");
const linearButton = document.getElementById("linear");
const puzzleButton = document.getElementById("puzzle");
const sequenceButton = document.getElementById("sequence");
const simultaneousButton = document.getElementById("simultaneous");

const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answers-buttons");
const scoreElement = document.getElementById("score");
const nextBtnElement = document.getElementById("nextQuestion");
const previousBtnElement = document.getElementById("previousQuestion");
const endQuizElement = document.getElementById("endQuiz");

let currentQuestionIndex = 0;
let score = 0;
let currentQuestionSet = [];
const selectedAnswers = {};

function startQuiz(Questions) {
    currentQuestionSet = Questions;
    currentQuestionIndex = 0;
    score = 0;
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < currentQuestionSet.length) {
        let currentQuestion = currentQuestionSet[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;

        questionElement.innerText = `Question(${questionNo}) ${currentQuestion.question}`;
        scoreElement.innerHTML = `Score: ${score}/${currentQuestionSet.length}`;

        answerButtonElement.innerHTML = "";
        nextBtnElement.style.display = "inline";
        previousBtnElement.style.display = "inline";

        currentQuestion.answers.forEach((answer) => {
            const liElement = document.createElement("li");
            const buttonElement = document.createElement("button");
            buttonElement.className = "btn";
            buttonElement.setAttribute("data-correct", answer.correct);
            buttonElement.setAttribute("data-answer", answer.text);

            buttonElement.innerText = answer.text;

            if (selectedAnswers[questionNo] && selectedAnswers[questionNo].text === answer.text) {
                buttonElement.classList.add("greyBackground");
                buttonElement.disabled = true;
            }

            liElement.appendChild(buttonElement);
            answerButtonElement.appendChild(liElement);

            buttonElement.addEventListener("click", () => {
                if (!selectedAnswers[questionNo]) {
                    selectedAnswers[questionNo] = answer;
                    checkAnswers(answer.correct);
                    buttonElement.classList.add("greyBackground");
                    buttonElement.disabled = true;
                    setTimeout(1500);
                }
            });
        });
    } else {
        nextBtnElement.style.display = "none";
        previousBtnElement.style.display = "inline";
        endQuizElement.style.display = "inline";
        endQuizElement.style.marginRight = 0;
        endQuizElement.addEventListener("click", () => {
            endQuiz();
        });
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showNextQuestion();
    }
}

previousBtnElement.addEventListener("click", () => {
    showPreviousQuestion();
});

nextBtnElement.addEventListener("click", () => {
    currentQuestionIndex++;
    showNextQuestion();
});

function checkAnswers(isCorrect) {
    const buttonElements = answerButtonElement.querySelectorAll("button");

    buttonElements.forEach(button => {
        button.disabled = true;
        const isButtonCorrect = button.getAttribute("data-correct") === "true";

        if (isButtonCorrect) {
            button.classList.remove("greyBackground");
            button.style.backgroundColor = "green";
            button.style.color = "white";
        } else {
            button.classList.add('shake');
        }
    });

    if (isCorrect) {
        score++;
    }
}

function endQuiz() {
    scoreElement.innerHTML = `<span>Quiz ended. Your score: ${score}/${currentQuestionSet.length}</span>  <button class="restart-btn">Restart</button>`;
    scoreElement.style.justifyContent = "space-between";
    answerButtonElement.innerHTML = "";
    questionElement.innerText = "";
    previousBtnElement.style.display = "none";

    const mainPageButtonElement = document.getElementById("mainPage");
    mainPageButtonElement.style.display = "block";
    mainPageButtonElement.addEventListener("click", () => {
        location.reload();
    });

    const restartButtonElement = document.querySelector(".restart-btn");

    restartButtonElement.addEventListener("click", () => {
        scoreElement.innerHTML = "";
        mainPageButtonElement.style.display = "none";
        scoreElement.style.justifyContent = "center";
        startQuiz(currentQuestionSet);
    });

    endQuizElement.style.display = "none";
}


basicButton.addEventListener("click", () => {
    startQuiz(basicQuestions);
});
linearButton.addEventListener("click", () => {
    startQuiz(linearEquations);
});
puzzleButton.addEventListener("click", () => {
    startQuiz(puzzleQuestions);
});
sequenceButton.addEventListener("click", () => {
    startQuiz(sequenceList);
});
simultaneousButton.addEventListener("click", () => {
    startQuiz(simultaneousEquations);
});

const shakeBtn = document.getElementById('shake-btn');
shakeBtn.addEventListener('click', function () {
    if (shakeBtn.classList.contains('shake')) {
        shakeBtn.classList.remove('shake');
    } else {
        shakeBtn.classList.add('shake');
    }
});

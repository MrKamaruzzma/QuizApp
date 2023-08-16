
const quizQuestions = [
    {
        question : "1. Which of the following are not server-side JS?",
        a: "Data",
        b: "FileUpload",
        c: "Function",
        d: "All of the above",
        correct: "d",
    },
    {
        question : "2. What does the JavaScript debugger statement do?",
        a: "It will debug all the errors in the program at runtime.",
        b: "It will debug error in the current statement if any.",
        c: "It act as a breakpoint in program.",
        d: "All of the above.",
        correct: "c",
    },
    {
        question : "3. What does the toLocateString() method do in JS?",
        a: "Returns a localised object representation.",
        b: "Returns a pared string.",
        c: "Returns a localized string representation of an object.",
        d: "None of the above.",
        correct: "c",
    },
    {
        question : "4. What is the use of the <noscript> tag in JavaScript?",
        a: "The contents are displayed by non-JS-based browsers.",
        b: "Clears all the cookies and cache.",
        c: "Both A and B.",
        d: "None of the above.",
        correct: "a",
    },
    {
        question : "5. How to stop an intervarl timer in JavaScript?",
        a: "clearInterval",
        b: "clearTimer",
        c: "intervalOver",
        d: "None of the above",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('textA');
const b_text = document.getElementById('textB');
const c_text = document.getElementById('textC');
const d_text = document.getElementById('textD');
const NextBtn = document.getElementById('nextButton');
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizQuestions[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false);
}
function getSelected() {
    let answer;
    answerElements.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}
NextBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       if(answer === quizQuestions[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;

       if(currentQuiz < quizQuestions.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h1>Your Result is:  ${score*2}/${quizQuestions.length*2}</h1>
           <h1>Percentage ${(score / quizQuestions.length)*100}% </h1>
           <button id="reloadButton" onclick="location.reload()">< Play Again</button>
           `;
       }
    }
});
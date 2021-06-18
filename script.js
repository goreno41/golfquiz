//.. Define a set of questions

const questions = [

    {
        question: "What is the term used for a score of 2 below par on any given hole?",
        answers: ["a) Birdie", "b) Eagle", "c) Albatross", "d) Bogey"],
        correct: "b) Eagle"
    },
    {
        question: "What is the term used for a score of 2 below par on any given hole?",
        answers: ["a) Birdie", "b) Eagle", "c) Albatross", "d) Bogey"],
        correct: "b) Eagle"
    },
    {
        question: "What is the term used for a score of 2 below par on any given hole?",
        answers: ["a) Birdie", "b) Eagle", "c) Albatross", "d) Bogey"],
        correct: "b) Eagle"
    },
    {
        question: "What is the term used for a score of 2 below par on any given hole?",
        answers: ["a) Birdie", "b) Eagle", "c) Albatross", "d) Bogey"],
        correct: "b) Eagle"
    },
    {
        question: "What is the term used for a score of 2 below par on any given hole?",
        answers: ["a) Birdie", "b) Eagle", "c) Albatross", "d) Bogey"],
        correct: "b) Eagle"
    },
     

]



//.. Link variables to HTML Elements

var timer = document.getElementById("#timer");
var remainingTime = document.getElementById("remainingTime");
var timeGone = document.getElementById("timeGone");
var startButton = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var questionHeader = document.getElementById("questionHeader");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var startButton = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var quizContainer = document.getElementById("container");









//... Functions for timer, presenting questions, checking answers
startButton.addEventListener("click", function(){
    var timer = setInterval(startTimer,1000);
})


function askQuestion() {
    questionHeader.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}


var timeLeft = 90;

function startTimer() { 
    timeLeft --;
    if (timeLeft < 0)
    {
        clearInterval(startTimer);
        return;
    }
    document.getElementById("#timer").innerHTML = timeLeft + " secs";
}








function beginQuiz() {
    showQuestion();
}











//.. Define a set of questions

const questions = [


]



//.. Link variables to HTML Elements

var timer = document.getElementById("timer");
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


var questionIndex = 0;








//... Functions for timer, presenting questions, checking answers

var totalTime = 91;

function newQuiz() {
    questionIndex = 0;
    totalTime = 90;
    remainingTime.textContent = totalTime;

    startButton.style.display = "none";
    quizContainer.style.display = "block";
    timer.style.display = "block";
    timeGone.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        remainingTime.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};


startButton.addEventListener("click", newQuiz);






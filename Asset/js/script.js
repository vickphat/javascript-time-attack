var timer = document.querySelector("#time");
var highScore = document.querySelector("#score");
var questions = document.querySelector("#questions");
var questionsTitle = document.querySelector("#questions-title");
var choices = document.querySelector("#choices");
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var nextQuestions;
var currentIndex = 0;
var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));


startButton.addEventListener("click", startQuiz);

function startQuiz() {

    if (storedScores !== null) {
        allScores = storedScores;
    }
    startScreen.setAttribute ("style", "display: none");
    startButton.setAttribute ("style", "display: none");

    gameTimer()
}

function gameTimer() {
    var secondsLeft = 10;

    var timeInterval = setInterval(function () {
        if (secondsLeft > 1) {
            timer.textContent = secondsLeft;
            secondsLeft--;
        }
        else if (secondsLeft === 1) {
            timer.textContent = secondsLeft;
            secondsLeft--;
        }
        else {
            timer.textContent = '';

            clearInterval(timeInterval);

        }
    }, 1000);
}
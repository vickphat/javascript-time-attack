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


var questions = [
    {
        title: "Commonly used data type Do Not include:---",
        choices: ["strings", "booleance", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes", "Curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store:---",
        choices: ["numbers and strings", "others Arrays", "booleances", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        choices: ["JavaScript", "terminal/bash", "alerts", "console.log"],
        answer: "console.log"
    },
]




startButton.addEventListener("click", startQuiz);

function startQuiz() {

    if (storedScores !== null) {
        allScores = storedScores;
    }
    startScreen.setAttribute ("style", "display: none");
    startButton.setAttribute ("style", "display: none");
}


var timer = document.querySelector("#time");
var highScore = document.querySelector("#score");
var questions = document.querySelector("#questions");
var questionsTitle = document.querySelector("#questions-title");
var choices = document.querySelector("#choices");
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var choiceA = document.querySelector("#A")
var choiceB = document.querySelector("#B")
var choiceC = document.querySelector("#C")
var choiceD = document.querySelector("#D")
var currentIndex = 0;
var score = 0;
var secondsLeft = 75;


var quizQuestions = [
    {
        question : "What does JavaScript stand for?",
        choiceA : "Java",
        choiceB : "JavaScript",
        choiceC : "Hyperlink",
        choiceD : "Scripture",
        correct : "JavaScript"
    },

    {
        question: "When do JavaScripts execute?",
        choiceA : "Never",
        choiceB : "At the end",
        choiceC : "Immediately as the page loads",
        choiceD : "After a certain time has passed",
        correct : "Immediately as the page loads"
    },

    {
        question: "Is JavaScript case sensitive?",
        choiceA : "No",
        choiceB : "Yes",
        choiceC : "Maybe",
        choiceD : "Sometimes",
        correct : "Yes"    
    },
]

// renders question
var lastQuestionIndex = quizQuestions.length - 1;
var runningQuestionIndex = 0

function renderQuestion() {
    var q = quizQuestions[runningQuestionIndex];
    questionsTitle.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}


startButton.addEventListener("click", startQuiz);

function startQuiz() {

    
    startScreen.setAttribute ("style", "display: none");
    startButton.setAttribute ("style", "display: none");
    renderQuestion();
    choices.setAttribute("style", "display: block" )

    
    
    
    gameTimer()
    
}

// Quiz Timer
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


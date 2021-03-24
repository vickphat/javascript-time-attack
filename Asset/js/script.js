// Global Variable
var timer = document.querySelector("#time");
var highScore = document.querySelector("#score");
var questions = document.querySelector("#questions");
var questionsTitle = document.querySelector("#questions-title");
var choices = document.querySelector("#choices");
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var questionIndex = 0;
var score = 0;
var secondsLeft = 65;
var timeInterval;

// Array for questions, choices and answer
var quizQuestions = [
    {
        title: "What does JavaScript stand for?",
        choices: ["Java", "JavaScript", "Hyperlink", "Scripture"],
        answer: "JavaScript"
    },
    {
        title: "When do JavaScripts execute?",
        choices: ["Never", "At the end", "Immediately", "5 minutes"],
        answer: "Immediately"
    },
    {
        title: "What do arrays in Javascript store?",
        choices: ["Numbers & Strings", "Other Arrays", "Booleans", "All Of The Above"],
        answer: "All Of The Above"
    },
    {
        title: "Is JavaScript case sensitive?",
        choices: ["No", "Yes", "Maybe", "Sometimes"],
        answer: "Yes"
    },

];

// Creates questions and answers on page
var createUL = document.createElement("ul")

function render(questionIndex) {
    questionsTitle.innerHTML = "";
    createUL.innerHTML = "";

    var userQuestion = quizQuestions[questionIndex].title;
    var userChoices = quizQuestions[questionIndex].choices;
    questionsTitle.textContent = userQuestion;

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        choices.appendChild(createUL);
        createUL.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// Checks to see if choice made is correct
function compare(event) {
    var element = event.target;
    var minus = 10;

    if (element.matches("li")) {

        var divElement = document.createElement("div");
        divElement.setAttribute("id", "divElement");
        // If the answer is correct
        if (element.textContent == quizQuestions[questionIndex].answer) {
            score++;
            divElement.textContent = "Correct!";
          
        } 
        else {
        // If answer is wrong, substracts 10 secs from remaining time
            secondsLeft = secondsLeft - minus;
            divElement.textContent = "Wrong!";
        }
        // Cycles through questions in array
    } questionIndex++;

    if (questionIndex >= quizQuestions.length) {
        clearInterval(timeInterval);
        endGame();
    } 
    else {
        render(questionIndex);
    }
    questionsTitle.appendChild(divElement);
}
// Button to begin quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {

    startScreen.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    render(questionIndex);
    choices.setAttribute("style", "display: block")
    gameTimer()

}

// Quiz Timer
function gameTimer() {


    timeInterval = setInterval(function () {
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
            endGame()
        }
    }, 1000);
}


// End of quiz
function endGame() {

    questionsTitle.setAttribute("style", "display: none");
    timer.setAttribute("style", "display: none");
    choices.setAttribute("style", "display: none");
    endScreen.classList.remove("hide");
    // Takes remaining time and multiplies it by 2.5 to get final score
    finalScore.append(secondsLeft * 2.5);
    clearInterval(timeInterval)
    return;

}

// Saves initials and score to local storage 
submitButton.addEventListener("click", function () {
    var ID = initials.value;

    if (!ID) {
        alert("Please Enter Your Initials");
    }
    else {
        var endScore = {
            initials: ID,
            scores: secondsLeft * 2.5
        }
        console.log(endScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(endScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.replace("./highscore.html");
    }
});
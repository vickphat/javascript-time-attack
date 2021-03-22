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
// current index
var questionIndex = 0;
var score = 0;
var secondsLeft = 65;
var minus = 10;


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
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Is JavaScript case sensitive?",
        choices: ["No", "Yes", "Maybe", "Sometimes"],
        answer: "Yes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];


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

// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == quizQuestions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
            // Correct condition 
        } else {
            // Will deduct -10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - minus;
            createDiv.textContent = "Wrong!";
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= quizQuestions.length) {
        // All done will append last page with user stats
        endGame();
        clearInterval(timer);

    } else {
        render(questionIndex);
    }
    questionsTitle.appendChild(createDiv);
}

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
            endGame()
            clearInterval(timer);

        }
    }, 1000);
}

// End of quiz
function endGame() {

    questionsTitle.setAttribute("style", "display: none");
    timer.setAttribute("style", "display: none");
    choices.setAttribute("style", "display: none");
    endScreen.classList.remove("hide");
    finalScore.append(secondsLeft * 10);
    return;

}

// Event listener to capture initials and local storage for initials and score
submitButton.addEventListener("click", function () {
    var ID = initials.value;

    if (ID === null) {

        console.log("No value entered!");

    } 
    else {

        var endScore = {
            initials: ID,
            score: finalScore
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
        // Travels to final page
        window.location.replace("./highscore.html");
    }
});
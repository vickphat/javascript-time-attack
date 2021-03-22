// Declared variables
var highScore = document.querySelector("#highScore");
var clearButton = document.querySelector("#clear");
var backButton = document.querySelector("#back");

// Event listener to clear scores 
clearButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Event listener to move to index page
backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores) {

    for (var i = 0; i < allScores.length; i++) {

        var createEL = document.createElement("li");
        createEL.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createEL);

    }
};

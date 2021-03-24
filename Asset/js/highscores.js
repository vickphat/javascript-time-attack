var highScore = document.querySelector("#highScore");
var clearButton = document.querySelector("#clear");
var backButton = document.querySelector("#back");

// Clear highscores
clearButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Goes back to quiz page
backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});

// Pull data from local storage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores) {

    for (var i = 0; i < allScores.length; i++) {

        var createEL = document.createElement("li");
        createEL.textContent = allScores[i].initials + " " + allScores[i].scores;
        highScore.appendChild(createEL);

    }
};

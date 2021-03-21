function printHighScores() {
    // either get scores from localstorage or set of empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // sort highscores by score property in decending order
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    
}
# Code Quiz

In this assignment, I was tasked with creating a quiz with some questions about JavaScript.

<h1>The following is the acceptance criteria for this assignment:</h1>

    * GIVEN I am taking a code quiz
    * WHEN I click the start button
    * THEN a timer starts and I am presented with a question
    * WHEN I answer a question
    * THEN I am presented with another question
    * WHEN I answer a question incorrectly
    * THEN time is subtracted from the clock
    * WHEN all questions are answered or the timer reaches 0
    * THEN the game is over
    * WHEN the game is over
    * THEN I can save my initials and my score

<h1>What I Did</h1>

I created the html page to be plain and simple. I have the title of the code quiz at the top as "JavaScript Time Attack!!". It has the timer set over to the right hand side and a view highscore link over to the left. I have a quick description of what this page is about and the start button in the center. 

<img src= "https://github.com/vickphat/javascript-time-attack/blob/master/Asset/images/js-quiz.JPG" >

<br>

After you click the start button, the timer will change from 0 to 65 seconds and the first set of question and answers will appear on the screen. 

<img src= "https://github.com/vickphat/javascript-time-attack/blob/master/Asset/images/js-quiz2.JPG" >

From here, the user has started the quiz and now needs to read the questions and click on the choice that they believe is correct. If the answer is correct, the word "correct!" will appear under the questions and above the choices to let the user know that their choice for the previous question was correct. If the answer is wrong, it will show "wrong!" instead of "correct!". Also, if the question was answered wrong, there will be a penalty. The penalty will be 10 seconds being deducted from your remaining time which will impact your final score at the end. 

<img src= "https://github.com/vickphat/javascript-time-attack/blob/master/Asset/images/js-quiz.3.JPG">

<img src= "https://github.com/vickphat/javascript-time-attack/blob/master/Asset/images/js-quiz.4.JPG">

After answering all of the questions, the user will reach the end of the quiz. When the user reaches this point, the quiz will take the remaining time and multiply it by 2.5 to give the user their final score. If the user runs out of time, they will reach this point as well except they will have a final score value of 0. This is also where the user can enter their initials at the buttom to submit it to the highscore page. 

<img src= "https://github.com/vickphat/javascript-time-attack/blob/master/Asset/images/js-quiz.5.JPG">

After the user types in their initials and hits the submit button, it will automatically take them to the gigh score page and it will list the highscores. There will be a clear button if the user wants to reset the highscores that are saved. And there is also a back button which will take the user back to the beginning of the quiz so that they can retake the quiz. 

<img src= "https://github.com/vickphat/javascript-time-attack/blob/master/Asset/images/js-quiz.6.JPG">

<h1>Link To Deployed Application</h1>

https://vickphat.github.io/javascript-time-attack/
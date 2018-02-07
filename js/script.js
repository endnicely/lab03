/*eslint-env browser*/
//global variables 
var score1, score2, score3;
var total = 0;
var average;

//prompt user for the tehe test scores
score1 = window.prompt("What is the first score?");
total += parseFloat(score1);

score2 = window.prompt("What is the second score?");
total += parseFloat(score2);

score3 = window.prompt("What is the third score?");
total += parseInt(score3, 10);
window.console.log(total);
average = total / 3;

document.write("The first score: " + score1 + "<br>");
document.write("The second score: " + score2 + "<br>");
document.write("The third score: " + score3 + "<br>");
document.write("The average of the 3 scores: " + parseFloat(average));
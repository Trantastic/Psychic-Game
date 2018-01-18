/* 
Each time a user presses a letter -1 guess (true +1 win, false +1 loss)

When player wins or loses, start game over again without refreshing
*/

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r" , "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = [];

var wins = 0;
var losses = 0;
var guessLeft = 10;

document.onkeyup = function(start) {
	var userChoice = start.key;
	var compChoice = letters[Math.floor(Math.random() * letters.length)];

	userGuess.push(userChoice);

	if(guessLeft > 0) {
		if(userChoice === compChoice) {
			wins++; guessLeft--;
		}	

		else if (userChoice !== compChoice) {
			losses++; guessLeft--;
		}
	} 
	else {
		wins = 0; losses = 0; guessLeft = 10; userGuess = [];
	}

	var html =
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessLeft + "</p>" +
	"<p>Your guesses so far: " + userGuess + "</p>" +
	"<p>Computer guessed: " + compChoice + "</p>";

	document.querySelector("#scoreBoard").innerHTML = html;

};

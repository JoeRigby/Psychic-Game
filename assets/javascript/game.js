    
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses;
var guessChoices;

resetGame();

document.onkeyup = function(event) {
   var userGuess = event.key;

   var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            resetGame();
        }

        else if (numGuesses === 0) {
            resetGame();
        }

        else {
            numGuesses --;
            guessChoices.push(userGuess);
        }

    var html = 
    "<h1> The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + numGuesses + "</p>" +
    "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;
    }
};

function resetGame() {
  guessChoices = [];
  numGuesses = 10;
  // This is where a randon letter is selected    
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log("Letter to guess: " + computerGuess);
}
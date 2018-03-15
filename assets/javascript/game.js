window.onload = function() {

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function game() {
    letterToGuess = letters[Math.floor(Math.random()*letters.length)];
    
    document.getElementById("guessesLeft").innerHTML = 10;
    document.getElementById("guesses").innerHTML = "";

    console.log(letterToGuess);

    document.onkeypress = function (event) {
        var guess = event.key;
        if (guess.toLowerCase() != guess.toUpperCase() && guess != "Enter" && guess != "Space") {
            if (guess == letterToGuess) {
                alert("You win!")
                ++wins;
                document.getElementById("wins").innerHTML = wins;
                reset();
                game();
            } else if (guess !== letterToGuess) {
                guesses.push(guess);
                --guessesLeft;
                console.log(guessesLeft);
                document.getElementById("guesses").innerHTML = guesses;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
            }
        };
        if (guessesLeft < 1) {
            alert("YOU LOSE!");
            losses++;
            document.getElementById("losses").innerHTML = losses;
            reset();
            game();
        };
    };
};
game();

function reset() {
    guessesLeft = 10;
    guesses = [];
}

};
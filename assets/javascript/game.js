window.onload(function() {

var wins = 0;
var losses = 0;
var guessesLeft = 20;
var guesses = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var gameHTML = 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guesses + "</p>";

function game() {
    document.querySelector("#game").innerHTML = gameHTML;
    letterToGuess = letters[Math.floor(Math.random()*letters.length)];
};

document.querySelector("#game").innerHTML = gameHTML;


});
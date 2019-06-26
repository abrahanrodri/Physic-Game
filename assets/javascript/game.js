var $ = function (id){
    return document.getElementById(id);
}

var game = [
"Batman", 
"Terminator",
"Goonies",
"Predator",
"Scarface"
"Beetlejuice"
"Robocop",
"Ghostbusters"
];
var choice = Math.floor(Math.random()*4);
var answer = game[choice];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 10;
var output="";
var userLetter="";
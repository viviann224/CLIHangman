var Word = require("./Word.js");
var inquirer = require('inquirer');
//wordbank for secret word
var WordBank = {
	list:["Cat", "sal", "kitty kat"]

};
/*
console.log(WordBank.list[0]);
console.log(WordBank.list[1]);
console.log(WordBank.list[2]);
*/

var start=function()
{
	var guessLeft=10;
	var secret=WordBank.list[Math.floor(Math.random()*(2-0+1)+0)];
	console.log(secret);
	var myWord= new Word(secret);
	console.log(myWord);
	myWord.createArray();
	myWord.checkLetter("k");
	console.log(myWord.getUserArray());
	guessLeft=checkGuess("k", secret, guessLeft);
	console.log("GUESS: "+guessLeft);
	


}

var checkGuess=function(userChar, secretWord, guessLeft)
{
	if(!secretWord.includes(userChar))
	{
		guessLeft--;
		
	}
	return guessLeft;
}

start();
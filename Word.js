var Letter = require("./Letter.js");
// Word.js: Contains a constructor, Word that depends on the Letter constructor.
// This is used to create an object representing the current word the user is 
//attempting to guess. That means the constructor should define:
var Word = function(secretWord)
{
	// this.letters will hold all of our Letter objects
	this.letters=[];

	this.secretWord= secretWord.split("");
	console.log(secretWord);

};
// An array of new Letter objects representing the letters of the underlying 
//word
Word.prototype.blankWord=function()
{

	console.log("secret word passed to blank: "+this.secretWord[0]);
	for(var x=0; x<this.secretWord.length; x++)
	{
		console.log(this.secretWord[x].includes("-"));
		if(this.secretWord[x].includes("-"))
		{
			this.secretWord[x]=" ";
		}
		else
		{
			this.secretWord[x]="-";
		}
	}
	this.secretWord=this.secretWord.join("");
	return this.secretWord;
};

Word.prototype.checkStatus =function()
{
	return this.secretWord;
};
// A function that returns a string representing the word. This should call 
//the function on each letter object (the first function defined in Letter.js) 
//that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess 
//function on each letter object (the second function defined in Letter.js)
console.log("START GAME: ");
var myWord = new Word("kitty-kat");




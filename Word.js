var Letter = require("./Letter.js");
// Word.js: Contains a constructor, Word that depends on the Letter constructor.
// This is used to create an object representing the current word the user is 
//attempting to guess. That means the constructor should define:
var Word = function(secretWord)
{
	// this.letters will hold all of our Letter objects
	this.letters=[];
	this.userWord="";
	this.secretWord= secretWord.split("");
	this.userArray=[];
};

//create array creates an object array of letters
//and creates a userArray with blanks
Word.prototype.createArray = function()
{
	for(var x=0;x<this.secretWord.length;x++)
	{
		//creates the string concatination of the secret word
		if(this.secretWord[x].includes(" "))
		{
			//if there is a space, give a space instead of a blank
			this.userArray.push(" ");
		}
		else
		{
			//else use blanks
			this.userArray.push("_");	
		}
		
		//creating the secret word into an array to compare to user's char guess
		if(this.secretWord[x].includes("-"))
		{
			//if there are dashes go ahead and make them spaces
			this.secretWord[x]=" ";
		}
		//creating the object array of letter based on the secret letter
		this.letters.push(new Letter(this.secretWord[x]));

	}
	console.log(this.secretWord);
	console.log("blank userword: "+this.userWord);
	console.log(this.letters);
}

//checkLetter functions passes myChar
// calls the checkGuess function on each Letter array object 
Word.prototype.checkLetter=function(myChar)
{
	//calls the guess function on each letter of the obj
	for(var x=0; x<this.letters.length; x++)
	{
		this.letters[x].checkGuess(myChar,this.secretWord[x])
	}
	console.log(this.letters);
}
// An array of new Letter objects representing the letters of the underlying 
//word
Word.prototype.getUserArray=function()
{

	console.log("secret word passed to blank: "+this.secretWord[0]);
	for(var x=0; x<this.secretWord.length; x++)
	{
		console.log(this.letters[x].isGuessed);
		//creating the secret word into an array to compare to user's char guess
		if(this.letters[x].isGuessed)
		{	console.log("change from: "+typeof(this.userWord[x]))
			console.log("when true return: "+typeof(this.letters[x].returnGuess()));
			this.userArray[x]=this.letters[x].returnGuess();
			console.log(this.userArray[x]);
		}
		
		//this.letters.push(new Letter(this.secretWord[x]));
	}
	//this.secretWord=this.secretWord.join("");
	console.log(this.letters);
	//console.log(this.userWord);
	return this.userArray.join("");
};

module.exports = Word;
/*
Word.prototype.checkStatus =function(myChar)
{
	console.log("inside checkStatus");
	//console.log(this.letters);
	console.log(myChar);
	console.log(this.letters[0].displayChar());
	console.log(this.letters[0].checkChar(myChar, "kitty-kat"));
	console.log(this.letters[0].returnGuess());

};
*/
// A function that returns a string representing the word. This should call 
//the function on each letter object (the first function defined in Letter.js) 
//that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess 
//function on each letter object (the second function defined in Letter.js)
/*console.log("START GAME: ");
var myWord = new Word("kitty kat");
//console.log(myWord.secretArray());
//myWord.checkStatus("a");
myWord.createArray();
myWord.checkLetter("a");
console.log(myWord.getUserArray());
myWord.checkLetter("k");
console.log(myWord.getUserArray());
myWord.checkLetter("t");
console.log(myWord.getUserArray());
myWord.checkLetter("i");
console.log(myWord.getUserArray());
myWord.checkLetter("y");
console.log(myWord.getUserArray());
*/





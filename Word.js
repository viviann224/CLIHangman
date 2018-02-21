var Letter = require("./Letter.js");
// Word.js: Contains a constructor, Word that depends on the Letter constructor.
// This is used to create an object representing the current word the user is 
//attempting to guess. That means the constructor should define:
var Word = function(secretWord)
{
	// this.letters will hold all of our Letter objects
	this.letters=[];
	this.userWord="";
	//creating array for the secret word as the main reference
	this.secretWord= secretWord.split("");
	//creating a user array for user to use
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
}
// An array of new Letter objects representing the letters of the underlying 
//word
Word.prototype.getUserArray=function()
{
	for(var x=0; x<this.secretWord.length; x++)
	{
		//creating the secret word into an array to compare to user's char guess
		if(this.letters[x].isGuessed)
		{	
			this.userArray[x]=this.letters[x].returnGuess();
		}
	}
	//displays the user array and beautifying the format
	return this.userArray.join("");
};
//export Word to index.js
module.exports = Word;
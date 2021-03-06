//Letter constructor
//inputs, char userChar, and bool isGuessed
var Letter = function(userChar)
{
	this.userChar=userChar;
	this.isGuessed=false;
};
//returnGuess function checks if isGuessed is true, return the userChar
//else return "-"
Letter.prototype.returnGuess= function()
{
	if(this.isGuessed)
	{
		return this.userChar;
	}
	else
	{
		return "-";
	}
};

//checkChar function takes a character and a secretWord as an argument 
//and checks compares the secret word with myChar
//if myChar contains a char from a secret word, return true
//else return false
Letter.prototype.checkGuess= function(myChar, secretWord)
{
	if(secretWord.includes(myChar))
	{
		this.isGuessed=true;
	}
	else
	{
		this.isGuessed=false;
	}
};

//displayChar function displays either "-" or the correct char 
//if isGuessed is true, return the userChar
//else display "-" 
Letter.prototype.displayChar =function()
{
	console.log("userChar: "+ this.userChar);
	console.log("Guesses: "+ this.isGuessed);
};
//export Letter to Words.js
module.exports =Letter;
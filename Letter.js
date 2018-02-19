//Letter constructor
//inputs, char userChar, and bool isGuessed
var Letter = function(userChar, isGuessed)
{
	this.userChar=userChar;
	this.isGuessed=isGuessed;
};
//checkWord function checks if isGuessed is true, return the userChar
//else return "-"
Letter.prototype.checkWord = function()
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
//displayChar function displays either "-" or the correct char 
//if isGuessed is true, return the userChar
//else display "-" 
Letter.prototype.displayChar =function()
{
	console.log(this.checkWord());
};
//checkChar function takes a character and a secretWord as an argument 
//and checks compares the secret word with myChar
//if myChar contains a char from a secret word, return true
//else return false
Letter.prototype.checkChar= function(myChar, secretWord)
{
	if(secretWord.includes(myChar))
	{
		return true
	}
	else
	{
		return false;
	}
};

var myLetter = new Letter("a",false); 
//console.log(myLetter.checkWord());
myLetter.displayChar();
console.log(myLetter.checkChar("1", "apple"));








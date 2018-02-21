var Word = require("./Word.js");
var inquirer = require('inquirer');
//wordbank for secret word
var WordBank = {
	list:["cat", "sal", "kitty kat"]

};
/*
console.log(WordBank.list[0]);
console.log(WordBank.list[1]);
console.log(WordBank.list[2]);
*/
var Game=
{
userGuessArray:[],
isSame:false,
guessLeft:3,
secret:"",
myWord:null,
start:function()
{
	userGuessArray=[];
	guessLeft=3;
	secret=WordBank.list[Math.floor(Math.random()*(2-0+1)+0)];
	console.log(secret);
	this.myWord= new Word(secret);
	
	this.myWord.createArray();
	console.log(this.myWord);
	//ask for user input with user validation
	Game.userInput();

	//console.log(this.userInput);

	/*
	myWord.checkLetter("k");
	console.log(myWord.getUserArray());
	guessLeft=checkGuess("k", secret, guessLeft);
	console.log("GUESS: "+guessLeft);
	*/
	


},

checkUserBank:function(userChar)
{
	console.log(this.userChar);
},
/*
NO LONGER NEEDED
//function to check if userinput is a char or not
//returns true if char. false if not char
function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }
  */
  /*
checkSame: function(Game.myWord.userArray, Game.myWord.secretWord)
{

},
*/
userInput:function()
{
    inquirer.prompt([{
    name: "userLetter",
    type: "input",
    message: "Choose a letter:",
    validate: function(userLetter)
    {
    	console.log(userLetter);
    	var letters = /^[A-Za-z]+$/;
    	if(userLetter.match(letters))
    		//if true proceed on
    		{	return true;}
    	else
    		{	//That was not a valid response. try again
    			console.log("That was not a valid user input.\n Pick a char from a-z \nPlease try again!");
    			this.userInput();}
    }
    }]).then(function(user) 
    {	
    	//remove case sensitivity
    	var userChar= user.userLetter.toLowerCase();
    	//resets isSame to false
    	Game.isSame=false;
    	for(var x=0; x<this.userGuessArray.length;x++)
    	{
    		if(userChar == this.userGuessArray[x])
    			{	Game.isSame=true;}
    	}
    	//if this is a new char
    	if(!Game.isSame)
    	{
    		var noPoints=false;
    		//check if the user has the correct guess
    		//console.log(this.secret);
    		for(var x=0;x<Game.myWord.secretWord.length&&!noPoints;x++)
    		{
    			if(Game.myWord.secretWord[x]==userChar)
    			{
    				//Game.myWord.checkLetter(userChar);
    				noPoints=true;
    			}
    		}
    		console.log(noPoints);
    		if(noPoints)
    		{
    			console.log(userChar);
    			//if true update logic
    			Game.myWord.checkLetter(userChar);
    		}
    		else
    		{
    			//wrong user loses a turn
    			Game.guessLeft--;
    		}
    		//Game.myWord.checkLetter(userChar,secret);
    		//display the status
    		Game.myWord.getUserArray();
    		console.log(Game.myWord.userArray);
    		console.log("GUESSES: "+Game.guessLeft)
    		//this.userGuessArray.push(userChar);
    		//console.log("USER'S GUESSES: "+this.userGuessArray())
    		var isDone=true;
    		for(var x=0; x<Game.myWord.secretWord.length&&!isDone;x++)
    		{
    			console.log("secretword: "+(Game.myWord.secretWord[x]));
    			console.log("user array: "+(Game.myWord.userArray[x]));
    			if(!(Game.myWord.secretWord[x])==(Game.myWord.userArray[x]))
    			{	isDone=false;}
   
    		}

    		if(Game.guessLeft>0 &&!isDone)
    		{
    			//console.log("switched status: "+Game.myWord.switched);
    			Game.userInput();
    		}
    	}

    /*//assume user input is correct at first
    	//go ahead and tolower the char as needed
	      var userChar = (user.userLetter).toLowerCase();
	      //go ahead and test the char if in the array
	      //linear search to verify if char was guesses earlier
	      //reset isSame to false
	      isSame=false;
	      for(var x=0; x<this.userGuessArray;x++)
	      {
	      	if(userChar ==this.userGuessArray[x])
	      	{
	      		isSame=true;
	      	}
	      }
  		
	      //if wrong and and a new char
	      //go ahead and add it to the guessArray
	      if(!isSame)
	      {
	      	this.userGuessArray.push(userChar);
	      	this.myWord.letterCheck(userChar);
	      }
	      else
	      {
	      	console.log(this.userGuessArray);
	      	console.log("You already gussed that! \nPlease try again!");
	      	this.userInput();
	      }*/
	       // console.log("here");
    	/*
    	var isChar=false;
    	//chars available to input a-z
    	var letterCheck= /^[A-Za-z]+$/;
    	isChar=user.userLetter.match(letterCheck);
    	if(!isChar)
    	{
    		console.log("That was not a valid guess \nPlease try again!")
	      	//That was not a valid response. try again
	      	this.userInput();
    	}
    	var userChar = (user.userLetter).toLowerCase();
    	checkUserBank(userChar);
    	*/
    });
  },

checkGuess:function(userChar, secretWord, guessLeft)
{
	if(!secretWord.includes(userChar))
	{
		guessLeft--;
		
	}
	return guessLeft;
},
/*    	var isChar=false;
    	//chars available to input a-z
    	var letterCheck= /^[A-Za-z]+$/;
    	isChar=user.userLetter.match(letterCheck);
    	//if the user chooses a char, isSame = true; else set isSame to false
    	if(isChar)
    	{	//isChar= true;
			//go ahead and tolower the char as needed
		      var userChar = (user.userLetter).toLowerCase();
		      //go ahead and test the char if in the array
		      //linear search to verify if char was guesses earlier
		      //reset isSame to false
		      isSame=false;
		      for(var x=0; x<this.userGuessArray;x++)
		      {
		      	if(userChar ==this.userGuessArray[x])
		      	{
		      		isSame=true;
		      	}
		      }
	  		
		      //if wrong and and a new char
		      //go ahead and add it to the guessArray
		      if(!isSame)
		      {
		      	this.userGuessArray.push(userChar);
		      }
		      else
		      {
		      	console.log(this.userGuessArray);
		      	console.log("You already gussed that! \nPlease try again!");
		      	this.userInput();
		      }
    	}
    	else
    	{	isChar=false;
			//prompt user already guessed variable
	      	console.log("That was not a valid guess \nPlease try again!")
	      	//you already guess go ahead and ask the question again
	      	this.userInput();
    	}
    	*/
}
Game.start();


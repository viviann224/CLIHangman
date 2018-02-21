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
changed:false,
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
    		Game.changed=true;
    		console.log("before for loop");
    		for(var x=0; x<Game.myWord.secretWord.length&&Game.changed;x++)
    		{
    			console.log("inside for loop");
    			Game.changed=true;
    			console.log("secretword: "+(Game.myWord.secretWord[x]));
    			console.log("user array: "+(Game.myWord.userArray[x]));
    			if(Game.myWord.secretWord[x]!=Game.myWord.userArray[x])
    			{	Game.changed=false;}
    		}
    		console.log("changed?: "+Game.changed);
    		if(Game.guessLeft>0 && !Game.changed)
    		{
    			//console.log("switched status: "+Game.myWord.switched);
    			Game.userInput();
    		}
    		else if(Game.guessLeft==0)
    		{
    			console.log("You ran out of Guesses \nANSWER: "+Game.myWord.secretWord.join(""));
    		}
    		else if(Game.changed)
    		{
    			console.log("you finished congrats!");
    		}
    	}
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

}

Game.start();


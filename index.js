var Word = require("./Word.js");
var inquirer = require('inquirer');
//wordbank for secret word
var WordBank = {
	list:["english bulldog", "wrinkles", "stubby", "drool", "stubborn", "goofy"],
	//images for every point lost
	picture: ["\n\n\n\n\n\n\n------","\n\n\n\n\n\n\n-------------", "\n |\n |\n |\n |\n |\n |\n |\n-------------", "____________\n |         |\n |\n |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |\n |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |         |\n |         |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |         |\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        |\n |\n-------------","____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        | |\n |\n-------------"]

};

var Game=
{
userGuessArray:[],
isSame:false,
guessLeft:10,
secret:"",
myWord:null,
changed:false,
gameOver:false,
picture:0,
start:function()
{
	console.log("\n********************************************************************");
	console.log("********************************************************************");
	console.log("**                   Welcome to Hangman!                          **");
	console.log("**  HOW TO PLAY: To win, guess the secret word within 10 Guesses  **");
	console.log("********************************************************************");
	console.log("********************************************************************\n");
	//clear guess Array
	userGuessArray=[];
	//guesses user starts with
	guessLeft=10;
	Game.picture=0;
	//pick a secret word randomly from the wordBankArray
	secret=WordBank.list[Math.floor(Math.random()*(5-0+1)+0)];
	//create a word object passing in the secret word
	this.myWord= new Word(secret);
	//create the array of blanks for the user and the array of WordObject
	this.myWord.createArray();
	console.log(Game.myWord.userArray.join("")+"\n");
	//ask for user input with user validation
	Game.userInput();
},

checkUserBank:function(userChar)
{
	console.log(this.userChar);
},

userInput:function()
{
	//user validation for userinput for char
    inquirer.prompt([{
    name: "userLetter",
    type: "input",
    message: "Choose a letter:",
    //validate the user use a letter from the alphabet, if not ask for user input again
    validate: function(userLetter)
    {
    	var letters = /^[A-Za-z]+$/;
    	if(userLetter.match(letters))
    		//if true proceed on
    		{	return true;}
    	else
    		{	//That was not a valid response. try again
    			console.log(" was not a valid user input.\n Pick a character from a-z \nPlease try again!\n\n");
    			this.userInput();}
    }
    }]).then(function(user) 
    {	
    	
    	//remove case sensitivity
    	var userChar= user.userLetter.toLowerCase();
    	//resets isSame to false
    	Game.isSame=false;
    	//checks if user used char already
    	for(var x=0; x<this.userGuessArray.length;x++)
    	{
    		if(userChar == this.userGuessArray[x])
    			{	Game.isSame=true;}
    	}
    	//if this is a new char
    	if(!Game.isSame)
    	{
    		//resets noPoints to false
    		var noPoints=false;
    		//check if the user has the correct guess no points will be lost
    		for(var x=0;x<Game.myWord.secretWord.length&&!noPoints;x++)
    		{
    			//set no points will be lost if the char matches the secretword
    			if(Game.myWord.secretWord[x]==userChar)
    			{
    				noPoints=true;
    			}
    		}
    		//if not points lost,
    		if(noPoints)
    		{
    			//lets go ahead and update the word object array to say true for this userChar
    			//console.log(userChar);
    			//if true update logic to true in the specified Word object array
    			Game.myWord.checkLetter(userChar);
    		}
    		else
    		{
    			//wrong user loses a turn
    			Game.guessLeft--;
    		}
    		console.log("===================");
    		console.log("====  HANGMAN   ===");
    		console.log("===================");
    		console.log(WordBank.picture[10-Game.guessLeft]);
    		console.log("===================");
    		console.log("===================");
    		//display the status after user's guess
    		Game.myWord.getUserArray();
    		console.log("\n"+Game.myWord.userArray.join("")+"\n");
    		//display how many guesses left
    		console.log("===============");
    		console.log("  GUESSES: "+Game.guessLeft);
    		console.log("===============\n");
    		//changed is a bool flag to indicate when the secretword matches the user's array
    		Game.changed=true;
    		//go ahead and check each index of the array
    		for(var x=0; x<Game.myWord.secretWord.length&&Game.changed;x++)
    		{
    			//reset changed to true
    			Game.changed=true;
    			//console.log("secretword: "+(Game.myWord.secretWord[x]));
    			//console.log("user array: "+(Game.myWord.userArray[x]));
    			//if the user array is not the same with the secret word, are not done play
    			if(Game.myWord.secretWord[x]!=Game.myWord.userArray[x])
    			{	Game.changed=false;}
    		}
    		//console.log("changed?: "+Game.changed);
    		if(Game.guessLeft>0 && !Game.changed)
    		{
    			//console.log("switched status: "+Game.myWord.switched);
    			Game.picture++;
    			Game.userInput();
    		}
    		else if(Game.guessLeft==0)
    		{
    			console.log("\nI AM SORRY YOU RAN OUT OF GUESSES \nANSWER: "+Game.myWord.secretWord.join("")+"\n");
    		}
    		else if(Game.changed)
    		{
    			console.log("********************************************************************");
				console.log("********************************************************************");
				console.log("**                       CONGRATS!!!                              **");
				console.log("**                        YOU WIN!!                               **");
				console.log("********************************************************************");
				console.log("********************************************************************\n\n");
    	
    		}
    	}
    	//ran out of time still trying to trouble shoot if the user already has the same
    	//letter in the user
    	else if(Game.isSame)
    	{	
    		console.log("\nYou already guessed that!\nPlease TRY AGAIN!!!\n");
    		this.userInput();
		}
		//console.log("sameword: "+Game.isSame)
    });

  },

  restart: function()
  {
  	inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Restart?"
    }]).then(function(answer) {
      if(answer.play){
        that.start();
      } else{
        console.log("Goodbye!");
      }
    })
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
//Game.restart();


# CLI Hangman
**GETTING STARTED**:
To run the program, find the files in Bash/Terminal and type in "node index.js." The program should run automatically once program is opened.

If the program is not running automatically, please make sure you have all the prerequisites listed below and the path to open the file has the corresponding readMe.

**STATEMENT OF PURPOSE**:
CLI Hangman is a command line game using constructor functions. CLI Hangman is a command line node app that uses the inquirer npm package. Using inquirer the user will be asked a series of guesses to find out the word. The program passes in the guess and uses Letter.js and Word.js.

Letter.js has a function which displays the the secret word with "_" or the user input. Letter.js also contains a function which takes in the user input and checks it against the secret word and will return true if the user input guess contains a letter from the secret word.

Word.js has a function which returns the string concationation of the correct userinput and "_" to display the current status of the word. Word.js has another function which takes the userinput and updates each charater in the Letter constructor.

CLI Hangman was created to showcases the use of Node js via hangman. Used Inquirer NPM for user input validation.

**PREREQUISITES**:
- Node.js
- JavaScript
- Terminal / Bash / command line prompt
- Capability to run files in package.json (dotenv, inquirer, twitter, spotify, request)
- Perfered viewing in English language :us:

**HOW TO USE**:
Once the program loads a main menu is loaded up with a secret word. That looks similar to "_ _ _" followed by a question from inquirer to choose a letter.

Once the user chooses a valid letter, the program will check if the letter is within the secret letter. If the letter matches the secret word, the word will update to reflect the changes on the secret word. Similar to "_a_". If the letter does not match, the user will lose a guess and the secret word will be the same.

Everytime the user loses a guess, a drawing of the hangman appears until the 10 turns run out.

The user gets 10 guesses and if the user guesses the word correctly before the 10 guesses the user wins. Else the user loses and the answer displays once the user runs out of guesses and the game terminates
**BUILT WITH**:
- Sublime Text

**VERSION**:
This is the first version of CLI Hangman

**LICENSE**:
This project is licensed under Sublime.

**AUTHOR**:
Vivian Tuong Nguyen - Initial work

**ACKNOWLEDGMENTS**:
All rights are reserved to Vivian Tuong Nguyen. Do not alter or manipulate content and images from Vivian Tuong Nguyen.
Copyright   :copyright: 2018

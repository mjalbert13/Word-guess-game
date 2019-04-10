// Global Variables

var wins = 0;
var losses =0;
var wronGuess = [];
var guessesLeft =10;
var blankArray = [];
var lettersUsed = [];
var corectWord = 0;
var computerWord;

var wordList =["baseball", "soccer", "football", "coach", "birdie", "strike", "tackel"];

// Logic for game
function startGame() {
  
    //Generate random word from the list
    computerWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerWord);
  
    //sets lettesrs in word to blank spaces "_"
    for(var i = 0; i < computerWord.length; i++){
        blankArray.push("_");
        console.log(blankArray);
    }
    
}
// What happens when you win or lose
function winner(){
    if(corectWord === computerWord.length){
        wins++;
        alert("winner");
        console.log(wins);
    }
}
function losser(){
    if(guessesLeft === 0){
        losses++
        alert("loser")
        console.log(losses);
    }
}
// onkey evnt to log user input
document.onkeyup = function(event){
    
    userGuess = event.key;
    console.log(userGuess);
    
    if(computerWord.includes(userGuess)) {
        for( var i=0; i< computerWord.length; i++){
            if(computerWord[i] === userGuess){
                blankArray[i] = userGuess;
                corectWord++;
                winner();
            }
        }
        console.log("correct");
        console.log(blankArray);
    }
    else {
        lettersUsed.push(userGuess);
        guessesLeft--;
        losser();
        console.log(guessesLeft);
    }
} 

//What happens whe you win or lose


// Call functions
startGame();

// Shows blank letters on "blank-word" ID
document.getElementById("blank-word").innerHTML = blankArray;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessesLeft;
document.getElementById("lettersGuessed").innerHTML = lettersUsed;
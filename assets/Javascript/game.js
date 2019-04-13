// Global Variables
var isPlaying = false;
var wins = 0;
var losses =0;
var guessesLeft =10;
var blankArray = [];
var lettersUsed = [];
var corectWord = 0;
var computerWord;

var wordList =["baseball", "soccer", "football", "coach", "birdie", "strike", "tackel", "olympics", "skiing", "slamdunk", "grounder", "umpire", "dugout", "goalie", "slapshot"];

// Logic for game
function resSet(){
    if(userGuess = event.key){
        newGame();
    }
}


//Function to start and restart the game after win or loss
function newGame(){

    corectWord = 0;
    lettersUsed = [];
    blankArray = [];
    guessesLeft = 10;
    isPlaying  = true;

    computerWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerWord);
    for(var i = 0; i < computerWord.length; i++){
        blankArray.push(" _");
        document.getElementById("blank-word").innerHTML = blankArray;
    }
    document.getElementById("lettersGuessed").innerHTML = lettersUsed;
    document.getElementById("guessCount").innerHTML = guessesLeft;
}

    
// What happens when you win or lose
function winner(){
    if(blankArray.indexOf(" _") ==-1){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("Winner Winner chicken dinner! Press ok to play again.");
        resSet();
        console.log(wins);
    }
}
function losser(){
    if(guessesLeft === 0){
        losses++
        document.getElementById("losses").innerHTML = losses;
        alert("You lost! press ok to play again.");
        resSet();
        console.log(losses);
    }

}

// onkey event to log user input
document.onkeyup = function(event){
    
    userGuess = event.key;
    console.log(userGuess);
    
    if(computerWord.includes(userGuess)) {
        for( var i=0; i< computerWord.length; i++){
            if(computerWord[i] === userGuess){
                blankArray[i] = userGuess;
                corectWord++;
                document.getElementById("blank-word").innerHTML = blankArray;
                winner();
            }
        }
        console.log("correct");
        console.log(blankArray);
    }
    else {
        lettersUsed.push(userGuess);
        guessesLeft--;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        document.getElementById("lettersGuessed").innerHTML = lettersUsed;
        losser();
        console.log(guessesLeft);
    }
} 

// Call functions
newGame();






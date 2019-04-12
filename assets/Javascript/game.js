// Global Variables
var isPlaying = true;
var wins = 0;
var losses =0;
var guessesLeft =10;
var blankArray = [];
var lettersUsed = [];
var corectWord = 0;
var computerWord;
var newWord = [];

var wordList =["baseball", "soccer", "football", "coach", "birdie", "strike", "tackel", "olympics", "skiing", "slamdunk", "groundout", "umpire", "dugout", "goalie", "slapshot"];


// Logic for game
function resSet() {
    if(userGuess = event.key){
        newGame();
    }
}

function startGame() {
  
    //Generate random word from the list
    computerWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerWord);
  
    //sets letters in word to blank spaces "_"
    for(var i = 0; i < computerWord.length; i++){
        blankArray.push(" _");
        document.getElementById("blank-word").innerHTML = blankArray;
        console.log(blankArray);
    }

}
//Function to restart the game after win or loss
function newGame(){

    corectWord = 0;
    lettersUsed = [];
    blankArray = [];
    guessesLeft = 10;

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
    if(corectWord === computerWord.length){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("winner");
        winPic();
        resSet();
        console.log(wins);
    }
}
function losser(){
    if(guessesLeft === 0){
        losses++
        document.getElementById("losses").innerHTML = losses;
        alert("loser")
        lossPic();
        resSet();
        console.log(losses);
    }
}
function winPic() {
    var winImg = new Image(innerWidth 400, innerHeight 400);
    winImg src="../images/win-pic.jpg";
    document.body.appendChild(winImg);
}

function lossPic(){
    var lossImg = new Image(innerWidth: 400, innerHeight: 400);
    lossImg src="../images/loss-pic.jpg";
    document.body.appendChild(lossImg);
} 

// onkey evnet to log user input
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
startGame();
//resSet();





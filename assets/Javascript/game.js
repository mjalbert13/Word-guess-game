// press any key to start

//declare variables
var wins =0;
var losses = 0;
var maxGuess =10;
// create an array of words for the computer guess
var wordList = ["spike","cleat","coach","strike","ball","basket"]

// display computer word in hidden mode
var computerWord = wordList[Math.floor(Math.random() * wordList.length)];

var blankArray = [];
    for (var i = 0; i < computerWord.length; i++) {
        blankArray[i] = " _ "
    }
    console.log(blankArray);

// listen for what key user presses
document.onkeyup =function(event) {
    var userGuess = event.key;
    console.log(userGuess)
}
//if letter user selects matches any in computer guess display letter
function letterCheck(userGuess) {

    for (var i=0; i < wordList[computerWord].length;i++) {
        if(wordList[computerWord][i] === letter) {
            blankArray.push(i);
        }
    }
}
console.log(blankArray)
//if letter does not match subtract 1 from guess count


// if guess cout = 0 display loss image and increase losses by 1

// if user gets all the letters in computer guess display win image and increase wins by 1


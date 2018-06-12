<<<<<<< HEAD
$(document).ready(function() {

var wins = 0;
var losses = 0;
var userNumber = 0;

function crystalGame(){

userNumber = 0;
$("#userGuess").text(userNumber);

var randomNumber = Math.floor(Math.random() * 102) + 19;
var greenNumber = Math.floor(Math.random() * 12) + 1;
var blueNumber = Math.floor(Math.random() * 12) + 1;
var redNumber = Math.floor(Math.random() * 12) + 1;
var whiteNumber = Math.floor(Math.random() * 12) + 1;

// console.log(randomNumber);
// console.log(blueNumber);
// console.log(greenNumber);
// console.log(redNumber);
// console.log(whiteNumber);

$("#compGuess").text(randomNumber);

$("#greencrystal").click(function(){
    userNumber = userNumber + greenNumber;
    $("#userGuess").text(userNumber);
    //console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
        crystalGame();
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
        crystalGame();
    }
})
$("#bluecrystal").click(function(){
    userNumber = userNumber + blueNumber;
    $("#userGuess").text(userNumber);
    //console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
        crystalGame();
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
        crystalGame();
    }
})
$("#redcrystal").click(function(){
    userNumber = userNumber + redNumber;
    $("#userGuess").text(userNumber);
    //console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
        crystalGame();
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
        crystalGame();
    }
})
$("#whitecrystal").click(function(){
    userNumber = userNumber + whiteNumber;
    $("#userGuess").text(userNumber);
    //console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
        crystalGame();
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
        crystalGame();
    }
})
$("#reset").click(function(){
    wins = 0;
    $("#wins").text(wins);
    losses = 0;
    $("#losses").text(losses);
    userNumber = 0;
    $("#userGuess").text(userNumber);
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#compGuess").text(randomNumber);
    alert("Game Reset: Good luck!");
})
}
crystalGame();

// if (userNumber === randomNumber){
//     alert("You've won!!");
//     wins++;
// }
// else if (userNumber >= randomNumber){
//     alert("You just lost");
//     losses++;
// }

=======
$(document).ready(function() {

var userNumber = 0;
var wins = 0;
var losses = 0;

var randomNumber = Math.floor(Math.random() * 102) + 19;
var greenNumber = Math.floor(Math.random() * 12) + 1;
var blueNumber = Math.floor(Math.random() * 12) + 1;
var redNumber = Math.floor(Math.random() * 12) + 1;
var whiteNumber = Math.floor(Math.random() * 12) + 1;

// console.log(randomNumber);
// console.log(blueNumber);
// console.log(greenNumber);
// console.log(redNumber);
// console.log(whiteNumber);

$("#compGuess").text(randomNumber);

$("#greencrystal").click(function(){
    userNumber = userNumber + greenNumber;
    $("#userGuess").text(userNumber);
    console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
    }
})
$("#bluecrystal").click(function(){
    userNumber = userNumber + blueNumber;
    $("#userGuess").text(userNumber);
    console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
    }
})
$("#redcrystal").click(function(){
    userNumber = userNumber + redNumber;
    $("#userGuess").text(userNumber);
    console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
    }
})
$("#whitecrystal").click(function(){
    userNumber = userNumber + whiteNumber;
    $("#userGuess").text(userNumber);
    console.log(userNumber);

    if (userNumber === randomNumber){
        alert("You've won!!");
        wins++;
        $("#wins").text(wins);
    }
    else if (userNumber >= randomNumber){
        alert("You just lost");
        losses++;
        $("#losses").text(losses);
    }
})
$("#reset").click(function(){
    wins = 0;
    $("#wins").text(wins);
    losses = 0;
    $("#losses").text(losses);
    userNumber = 0;
    $("#userGuess").text(userNumber);
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#compGuess").text(randomNumber);
})

// if (userNumber === randomNumber){
//     alert("You've won!!");
//     wins++;
// }
// else if (userNumber >= randomNumber){
//     alert("You just lost");
//     losses++;
// }

>>>>>>> e53133bc90f4b9f7240b9720352a924fea76f316
})
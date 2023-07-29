
var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;

var num1 = `<div class="dot dot-center"></div>`;
var num2 = `<div class="dot dot-top-left"></div>
            <div class="dot dot-bottom-right"></div>`;
var num3 = `<div class="dot dot-top-left"></div>
            <div class="dot dot-center"></div>
            <div class="dot dot-bottom-right"></div>`;
var num4 = `<div class="dot dot-top-left"></div>
            <div class="dot dot-top-right"></div>
            <div class="dot dot-bottom-right"></div>
            <div class="dot dot-bottom-left">`;
var num5 = `<div class="dot dot-top-left"></div>
            <div class="dot dot-top-right"></div>
            <div class="dot dot-center"></div>
            <div class="dot dot-bottom-right"></div>
            <div class="dot dot-bottom-left">`;
var num6 = `<div class="dot dot-top-left"></div>
            <div class="dot dot-top-right"></div>
            <div class="dot dot-center-left"></div>
            <div class="dot dot-center-right"></div>
            <div class="dot dot-bottom-right"></div>
            <div class="dot dot-bottom-left">`;

var num = [num1, num2, num3, num4, num5, num6];

if(player1>player2){
    document.getElementsByClassName("Result")[0].innerHTML = " &#128681; Player 1 Wins";
} else if(player1< player2){
    document.getElementsByClassName("Result")[0].innerHTML = "Player 2 Wins &#128681; ";
} else{
    document.getElementsByClassName("Result")[0].innerHTML = " &#128681; Match Tie &#128681; ";
}


document.getElementById("dice1").innerHTML = num[player1-1];
document.getElementById("dice2").innerHTML = num[player2-1];
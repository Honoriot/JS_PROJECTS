var gameStatus = "STOP";
var bestScore = 0;
var yourScore = 0;
var level = 0;
var randomSize = 4;

var level_status = "";
var questionPattern = [];
var checkPos = 0;

document.querySelector(".start-btn").addEventListener("click", function (){
    if(gameStatus=="STOP"){
        gameStatus = "RUNNING";
        document.querySelector(".start-btn").innerHTML = "STOP";
        level++;
        level_status = "RUNNING";
        yourScore = 0;
        updateBoard();
        fillStack();
    }else if(gameStatus=="RUNNING"){
        gameStatus = "STOP";
        yourScore = 0;
        level = 0;
        updateBoard();
        document.querySelector(".start-btn").innerHTML = "START";
    }
});

function updateBoard(){
    document.querySelector(".YS").innerHTML = `Your Score: ${yourScore}`;
    document.querySelector(".LE").innerHTML = `LEVEL ${level}`;
    document.querySelector(".BS").innerHTML = `Best Score: ${bestScore}`;
}


document.querySelectorAll(".btn-press").forEach(e=>{
    e.addEventListener("click",function (ele){
        
        animationINOUT(ele.target.classList[1]);

        var num_check = 0;
        switch (ele.target.classList[1]) {
            case "G":
                num_check = 1;
                break;
            case "R":
                num_check = 2;
                break;
            case "Y":
                num_check = 3;
                break;
            case "B":
                num_check = 4;
                break;
        }

        if(gameStatus=="RUNNING"){
            // console.log(num_check);
            if(level_status=="RUNNING"){
                if(questionPattern[checkPos] == num_check){
                    checkPos++;
                }else if(questionPattern[checkPos] != num_check){
                    level_status = "CLEAR";
                    level = 0;
                    yourScore = 0;
                    gameStatus = "STOP";
                    checkPos=0

                    new Audio("./Music/error.mp3").play();

                    document.querySelector(".start-btn").innerHTML = "START";
                    updateBoard();
                }


                if(checkPos==questionPattern.length){
                    // console.log("LEVEL CLEAR");
                    checkPos = 0;
                    yourScore += level;
                    if(bestScore > 0 && yourScore > bestScore){
                        new Audio("./Music/victory.mp3").play();
                    }
                    level++;
                    fillStack();
                    console.log(questionPattern);
                    bestScore = Math.max(bestScore, yourScore);
                    updateBoard();
                }
            }else if(level_status=="CLEAR"){

            }
        }else{
            return;
        }

    })
});

var fill = 0;
var count = 0;
var startFill;

function fillStack(){
    questionPattern = [];
    startFill = setInterval(randomStack, 1000);
}



function randomStack(){
    if(gameStatus=="RUNNING" && count<level){
        var num = Math.floor(Math.random()*randomSize + 1);
        // console.log(num);
        questionPattern.push(num);
        switch(num){
            case 1:
                animationINOUT("G");
                break;

            case 2:
                animationINOUT("R");
                break;

            case 3:
                animationINOUT("Y");
                break;
            case 4:
                animationINOUT("B");
                break;
        }
        count++;
    }else{
        count = 0;
        console.log(questionPattern);
        clearInterval(startFill);
    }
}

// randomStack();

function animationINOUT(charPress){
    document.querySelector(`.${charPress}`).classList.add("btn-press-hover");
    setTimeout(function (){
        document.querySelector(`.${charPress}`).classList.remove("btn-press-hover");
    }, 500);

    var audio = new Audio("./Music/ping.mp3");
    audio.play();
}
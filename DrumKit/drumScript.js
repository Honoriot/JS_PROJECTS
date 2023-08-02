
function playSound(e){
    var box = document.querySelector(`div[data-key="${e.key}"]`);
    var audio = document.querySelector(`audio[data-key="${e.key}"]`);
    // console.log("clicked");
    
    if(!audio) return;
    box.classList.add("box-style");
    audio.currentTime = 0;
    audio.play();
}

function playClick(e){
    var element = e.target;
    element.classList.add("box-style");
    var keyAudio = element.attributes[1].nodeValue;

    var audio = document.querySelector(`audio[data-key="${keyAudio}"]`);
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    e.target.classList.remove("box-style");
}

var boxes = Array.from(document.querySelectorAll(".box"));
// console.log(boxes);
boxes.forEach(e=>{
    //console.log(e);
    e.addEventListener("transitionend", removeTransition);
    e.addEventListener("click", playClick);
})

window.addEventListener("keydown", playSound);
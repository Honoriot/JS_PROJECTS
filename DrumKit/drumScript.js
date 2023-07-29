
function playSound(e){
    var box = document.querySelector(`div[data-key="${e.key}"]`);
    box.classList.add("box-style");
}

function removeTransition(e){
    // console.log(e);
    // if(e.propertyName !== 'transform') return;
    e.target.classList.remove("box-style");
}

var boxes = Array.from(document.querySelectorAll(".box"));
// console.log(boxes);
boxes.forEach(e=>{
    //console.log(e);
    e.addEventListener("transitionend", removeTransition);
})

window.addEventListener("keydown", playSound);
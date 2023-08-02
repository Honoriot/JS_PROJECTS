var btnElement = document.getElementsByClassName("btn")[0];
var data = [];
var inputHandler = document.querySelector('#inputData');

function removeTag(e){
    var obj = e.target.attributes[1].nodeValue;
    console.log(obj);
    var objList = document.querySelector(`li[data-index="${obj}"]`).innerText;

    console.log(objList);
    var index = data.indexOf(objList);
    var data1 = data.slice(0, index); 
    data.slice(index+1).forEach(e=>{
        data1.push(e);
    });
    data = data1;

    modifyList();
}

function applySelector(){
    document.querySelectorAll(".li-a a").forEach(e => {
        e.addEventListener("click", removeTag);
    });
}


function modifyList(){
    var str = ``;
    data.sort();
    data.forEach(e=>{
        str += `<div class="li-a">
        <li data-index="${data.indexOf(e)}">${e}</li> <a href="#" dataindex="${data.indexOf(e)}">&#128686;</a>
    </div>`;
    });
    document.querySelector(".list-item").innerHTML = str;

    applySelector();
}

function buttonClick(){
    console.log("I am clicked");

    //console.log(inputHandler.value);
    if(inputHandler.value !== ''){
    data.push(inputHandler.value);
    inputHandler.value = '';
    modifyList();
    }
}

inputHandler.addEventListener("keypress", e=>{
    // console.log(e.keyCode);
    if(e.keyCode === 13 && inputHandler.value !== ''){
        data.push(inputHandler.value);
        inputHandler.value = '';
        modifyList();
    }
})

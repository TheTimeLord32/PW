"use strict";

// window.addEventistener("load", function);
window.onload = () => {
    let btn = document.getElementById("wantButton");
    btn.addEventListener("click", addNewElement);
}


function addNewElement(){
    // alert("Ciao");
    let FMquotes = ["to ride my bicicle", "to break free"];
    let rndElementIdX = Math.floor(Math.random() * FMquotes.length);
    let rndElement = FMquotes[rndElementIdX]
    
    let newLi = document.createElement("li");
    let newTxt = document.createTextNode(rndElement);
    newLi.appendChild(newTxt);
    let listEl = document.getElementById("wantList");
    listEl.appendChild(newLi);
}

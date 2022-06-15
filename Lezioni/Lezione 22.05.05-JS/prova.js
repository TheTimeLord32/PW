"use strict";

const MOVE_TIME = 1000;
let el, body;
let isPageBgWhite = true;


window.onload = function() {
    el = document.getElementById("alertclick");
    body = document.getElementsByTagName("body")[0];
    el.addEventListener("click", hafattoclick);
    // document.getElementById("btnchangetext").onclick = hafattoclick;
}

function hafattoclick(){
    alert("bravo");
}

function moveDiv(){
    const pageHeight = 500;
    const pageWidth = 500;
    let mtop = parseInt(Math.random() * pageHeight);
    let mleft = parseInt(Math.random() * pageWidth);
    el.style.marginLeft = `${mleft}px`;
    el.style.marginTop = `${mtop}px`;
    if (isPageBgWhite) {
        el.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
    } else {
        el.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
    }
    isPageBgWhite = !isPageBgWhite;
}

setInterval(moveDiv, MOVE_TIME);

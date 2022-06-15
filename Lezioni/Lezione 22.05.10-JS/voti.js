"use strict";

const url = "voti.json";
let xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send(null);
let exams = JSON.parse(xhr.responseText);
let tbody;

window.onload() = () => {
    tbody = document.getElementById("voti").getElementbyTagName("tbody")[0];


exams.forEach((el) => {
    let tr = document.createElement("tr");
    let tdEx = document.createElement("td");
    let txtEX = document.createTextNode(el.esame);
    let tdMark = document.createElement("td");
    let txtMark = document.createTextNode(el.voto);
    
    tdEx.appendChild(txtEX);
    tdMark.appendChild(txtMark);
    
    tr.appendChild(tdEx);
    tr.appendChild(tdMark);
    
    tbody.appendChild(tr);
});

};
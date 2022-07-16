"use strict";

window.onload = () => {
    fetchData();
    menu();
    chiudi();
};

function fetchData(){
    fetch("data.json")
    .then(response => response.json())
    .then(json_obj => {
        let nav = document.querySelector("nav");
        let ul = nav.appendChild(document.createElement("ul"))
        for (let i = 0; i < json_obj.length; i++) {
            let li = ul.appendChild(document.createElement("li"))
            let a = li.appendChild(document.createElement("a"))
            a.innerHTML = json_obj[i].desc;
            a.setAttribute("href", json_obj[i].link)
        }
    });
}

function menu(){
    let menu = document.querySelector(".menu");
    let nav = document.querySelector("nav");
    menu.addEventListener('click', ()=>{
        if (window.innerWidth < 600) 
            nav.classList.toggle("hidden");
    });
}

function chiudi() {
    let overlay = document.querySelector(".overlay")
    let btn = document.querySelector("button");
    btn.addEventListener('click', ()=>{
        overlay.classList.toggle("hidden");
    });
}
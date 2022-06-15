"use strict";

window.onload = () => {
    input();
};


function input(){
    fetch("menu.json")
    .then(response => response.json())
    .then(json_obj => {
        let sezione = document.querySelector(".menu").appendChild(document.createElement("ul"));
        for (let i = 0; i < json_obj.length; i++) {
            let titolo = sezione.appendChild(document.createElement("li"));
            let par = titolo.appendChild(document.createElement("a"));
            
            par.innerHTML = json_obj[i].desc;
            par.setAttribute("href", json_obj[i].link);
        }
    });
}

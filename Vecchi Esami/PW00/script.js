"use strict";

function shuffle(array) { 
    array.sort(() => Math.random() - 0.5); 
} 

let arr = [1, 2, 3]; 
shuffle(arr);

function menu(){
    const menu = document.querySelector(".menu");
    const menuList = document.querySelector(".menu-list");
    console.log(menu);
    if (window.innerWidth < 1000) {
        menuList.classList.add(".hidden");
        const actionMenu = function(e) {
            console.log(e);
            menuList.classList.toggle('hidden');
        };
        menu.addEventListener('click', actionMenu);
    } else if(window.innerWidth >= 1000) {
        menuList.classList.remove('hidden');
    }

}

function input(){
    fetch("input.json")
    .then(response => response.json())
    .then(json_obj => {
        for (let i = 0; i < json_obj.length; i++) {
            let sezione = document.querySelector(".columns").appendChild(document.createElement("section"));
            let titolo = sezione.appendChild(document.createElement("h2"));
            let par = sezione.appendChild(document.createElement("p"));
            
            titolo.innerHTML = json_obj[i].titolo;
            par.innerHTML = json_obj[i].contenuto;
        }
    });
}

input();
menu();


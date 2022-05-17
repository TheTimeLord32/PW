"use strict";

window.onload = () => {
    const form = document.querySelector(".my-form");
    const txt = document.querySelector(".inp-txt");
    const dynlist = document.querySelector(".dyn-list");
    
    const formAction = function(e) {
        e.preventDefault();
        const li = document.createElement("li");
        li.innerHTML = txt.value;
        
        if (txt.value == "reset") {
            dynlist.innerHTML = "";
            txt.value = "";
        } else {
            dynlist.appendChild(li);
            txt.value = "";
        }

        dynlist.addEventListener("click", (ev) => {
            ev.target.remove();
        })
    };

    form.addEventListener("submit", formAction);
};

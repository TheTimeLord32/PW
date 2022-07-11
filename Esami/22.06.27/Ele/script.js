"use strict";

window.onload=()=>{
    const body = document.querySelector("body");
    const cambiaColori = document.querySelector(".cambia_colore");
    const a = document.querySelectorAll("a");
    cambiaColori.addEventListener("click",()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(el=>{
            body.style.backgroundColor = el.background;
            //a.style.color = el.link;
            body.style.borderColor = el.border;
        })
        .catch(e=>alert(e));
    })
    const confA = document.querySelector(".cambia_configurazioneA")
    const confB = document.querySelector(".cambia_configurazioneB")

    confA.addEventListener("click",()=>{
        const menu = document.querySelector("nav");
        const menuVoci = document.querySelector("ul");
        const aside = document.querySelector("aside");
        menu.style.order = 4;
        aside.style.order = 2;
    })
    confB.addEventListener("click",()=>{
        const h1 = document.querySelector("h1");
        h1.style.textAlign = "center";
        setTimeout(()=>{
            h1.style.textAlign = "left";
        }, 3000)
    })
}
"use strict";

let images = [
    "https://yt3.ggpht.com/a/AATXAJz36HF4z_AlHjY5O8V0nxB6SHzVeJ0ayYjx5g=s900-c-k-c0xffffffff-no-rj-mo",
    "https://anticyberbullismo.it/wp-content/uploads/2017/05/Logo-Uni-Tor-Vergata-1000x1000.png"];

let btn = document.getElementById("change-img");
let img = document.getElementById("imgcng");
let i = 0;

btn.addEventListener("click", () => {
    img.setAttribute("src", images[i++]);
    if (i == images.length) {
        btn.setAttribute("disabled", "true");   // disattiva il bottono quando arriva all'ultima immagine
        // i = 0;
    }
    console.log(img.getAttribute("src"));
});

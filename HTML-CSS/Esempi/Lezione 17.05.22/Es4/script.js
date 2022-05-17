"use strict";

window.onload = () => {
    const btn = document.querySelector(".btn-show");
    const modal = document.querySelector(".mymodal");
    const overlay = document.querySelector(".overlay");
    const close = document.querySelector(".close");

    const showModal = function(e) {
        e.preventDefault();
        modal.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    };
    
    const closeModal = function(e) {
        e.preventDefault();
        modal.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    };

    close.addEventListener("click", closeModal);
    btn.addEventListener("click", showModal);
};

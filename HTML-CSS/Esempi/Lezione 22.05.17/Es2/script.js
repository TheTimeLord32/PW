"use strict";

window.onload = () => {

    const section = document.querySelectorAll('.click-section');

    const colorElement = function(ev) {
        ev.target.nextElementSibling.style.color = 'red';
    }
    section.forEach(function(el) {
        el.addEventListener('click', colorElement);
    });
}
"use strict";

window.onload = () => {
    const menu = document.querySelector('.menu-ctrl');
    const menuList = document.querySelector('.dyn-menu');
    const actionMenu = function(e) {
        console.log(e);
        menuList.classList.toggle('hidden');
    };
    menu.addEventListener('click', actionMenu);
}
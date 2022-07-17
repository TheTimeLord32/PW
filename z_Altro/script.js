"use strict";

window.onload = () => {
	let button = document.querySelector(".confA");
	button.addEventListener("click", change);
};

function change(){
	if(window.innerWidth >= 1000) {
		let navbar = document.querySelector(".navbar");
		let main = document.querySelector(".main");
		let footer = document.querySelector(".footer");
		
		navbar.style.float = "right";
		main.style.float = "right";
		footer.style.float = "right";
	}
}

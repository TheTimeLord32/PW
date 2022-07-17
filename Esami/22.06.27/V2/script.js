"use strict";

window.onload = () => {
	let overlay = document.querySelector(".overlay");
	let cambiaColori = overlay.childNodes[1].childNodes[1].childNodes[0];

	cambiaColori.addEventListener("click", changeColor);

	let confA = document.querySelector(".confA");
	confA.addEventListener("click", configA);

	let confB = document.querySelector(".confB");
	confB.addEventListener("click", configB);
};

function changeColor() {
	fetch("data.json")
	.then(response => response.json())
	.then(json_obj => {
		let body = document.querySelector("body"); 
		let a = document.querySelectorAll("a");
		
		body.style.backgroundColor = json_obj.background;
		// a.style.color = json_obj.link; 
		body.style.borderColor = json_obj.border;
	}
	)
	.catch(err => {
		alert("Errore: " + err);
		console.log("Errore:" + err);
	});
}

function configA() {
	// let clicked = false;

	let wrapper = document.querySelector(".wrapper");
	let menu = document.querySelector("menu");
	let main = document.querySelector(".main");
	let aside = document.querySelector(".aside");

	// if (clicked == true) {
		wrapper.style.gridTemplateColumns = "55% 30% 15%";
		main.style.gridColumn = "1/1";
		aside.style.gridColumn = "2/3";
		menu.style.gridColumn = "3/4";
	/* } else {
		wrapper.style.gridTemplateColumns = "15% 55% 30%";
		menu.style.gridColumn = "1/1";
		main.style.gridColumn = "2/3";
		aside.style.gridColumn = "3/4";
	}	 */
}

function configB() {
	const header = document.querySelector("h1");
	header.style.textAlign = "center";
	setTimeout(() => {
		header.style.textAlign = "left";
	}, 3000);
}

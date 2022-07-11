"use strict";

window.onload = () => {
	let body = document.querySelector(".changeColor");
	body.addEventListener("click", fetchData);
};

function fetchData(){
	fetch("data.json")
	.then(response => response.json())
	.then(json_obj => {
		let body = document.querySelector("body"); 
		// let a = document.querySelector("a");

		body.style.backgroundColor = json_obj.background;
		body.style.borderColor = json_obj.border;
		// a.style.color = json_obj.link;
	})
	.catch(err => {
		alert("Errore: " + err);
		console.log("Errore: " + err);
	});
}

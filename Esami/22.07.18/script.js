"use strict";
let array;

window.onload = () => {
	fetchData();
	let titolo = document.querySelector("h1");
	titolo.addEventListener("click", createDiv);	
};


function fetchData(){
	try {
		fetch("data.json")
		.then(response => response.json())
		.then(json_obj => {
			array = json_obj;
			console.log(array);
			for(let i = 0; i < array.length; i++){
				console.log("Data ", i, ": ", array[i]);
			}
		});
	} catch (error) {
		alert("Errore: " + error);
		console.log("Errore: " + error);
	}
}

function createDiv(){
	let main = document.querySelector("main");
	for (let i = 0; i < array.length; i++) {
		let div = main.appendChild(document.createElement("div"));
		console.log("Div creato");
		
		div.style.backgroundColor = array[i].colore;
		div.style.position = "absolute";
		div.style.width = "10vh";
		div.style.height = "10vh";
		div.style.left = array[i].pos_orizz + "%";
		div.style.top = array[i].pos_vert + "%";
		
		div.addEventListener("click", () => {
			main.removeChild(div);
			console.log("Div eliminato");
		});
	}
}
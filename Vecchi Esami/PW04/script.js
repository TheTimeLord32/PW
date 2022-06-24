"use strict";

window.onload = () => {
	let titolo = document.querySelector("header h1");
	titolo.addEventListener("click", fetchData);	
};

function fetchData(){
	fetch("data.json")
	.then(response => response.json())
	.then(json_obj => {
		let array = json_obj;
		let main = document.querySelector("main");
		
		for(let i = 0; i < array.length; i++){
			let div = main.appendChild(document.createElement("div"));
				
			console.log("Titolo premuto");
			console.log("Data ", i, ": ", array[i]);
				
			div.style.backgroundColor = array[i].colore;
			div.style.width = "10vh";
			div.style.height = "10vh";
			div.style.position = "absolute";
			div.style.left = array[i].pos_x + "%";
			div.style.top = array[i].pos_y + "%";

			div.addEventListener("click", () => {
				main.removeChild(div);
				console.log("Div eliminato");
			});
		}
	})
	.catch(err => {
		alert("Errore: " + err);
		console.log("Errore: " + err);
	});
}

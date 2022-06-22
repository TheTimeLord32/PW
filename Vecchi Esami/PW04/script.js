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
			let p = div.appendChild(document.createElement("p"));
			
			console.log("Titolo premuto");
			console.log("Data ", i, ": ", array[i]);
				
			p.style.backgroundColor = array[i].colore;
			p.style.width = "10vh";
			p.style.height = "10vh";
			p.style.position = "relative";
			p.style.left = array[i].pos_x + "vh";
			p.style.top = array[i].pos_y + "vh";

			div.addEventListener("click", () => {
				main.removeChild(div);
				console.log("Div eliminato");
			});
		}
	});
}

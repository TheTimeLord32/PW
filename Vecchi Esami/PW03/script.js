"use strict";

window.onload = () => {
	fetchData();
	let btn = document.querySelector("button");
	btn.addEventListener("click", convert);
};

function fetchData(){
	fetch("http://localhost:8081/data")
	.then(response => response.json())
	.then(json_obj => {
		let main = document.querySelector(".main").appendChild(document.createElement("pre"))
		for (let i = 0; i < json_obj.length; i++) 
		main.innerHTML = JSON.stringify(json_obj, null, 2)
	});
}

function convert(){
	fetch("http://localhost:8081/data")
	.then(response => response.json())
	.then(json_obj => {
		let main = document.querySelector(".main");
		main.removeChild(main.lastElementChild);
		main.appendChild(document.createElement("ul"));
		for (let i = 0; i < json_obj.length; i++) {
			let elem_lista = main.appendChild(document.createElement("li"));
            elem_lista.innerHTML = json_obj[i].prodotto + " " + json_obj[i].desc;
		}
	});
	let footer = document.querySelector(".footer");
	console.log(footer);
	footer.removeChild(footer.firstChild);
}

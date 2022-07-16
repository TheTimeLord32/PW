"use strict";

window.onload = () => {
	fetchData();
	chiudi();
	casuale();
};

function fetchData(){
	fetch("data.json")
	.then(response => response.json())
	.then(json_obj => {
		for (let i = 0; i < json_obj.length; i++) {
			let main = document.querySelector(".main").appendChild(document.createElement("div")); 
			main.style.zIndex= i+1
			let h2 = main.appendChild(document.createElement("h2"))
			h2.innerHTML = json_obj[i].titolo;
			let p = main.appendChild(document.createElement("p"))
			p.innerHTML = json_obj[i].contenuto;
		}
	});
}

function chiudi(){
	let menu = document.querySelector(".menu");
	let nav = document.querySelector("nav");
	menu.addEventListener('click', ()=> {
		if (window.innerWidth < 1000)
			nav.classList.toggle("hidden");
	});
}

/* 
function shuffle(array) {
	array.sort(()=> Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);

function casuale() {
	let articoli = document.querySelector(".articoli");
	let main = document.querySelector(".main");
	articoli.addEventListener('click', ()=>{
		let div = document.querySelector("div");
		div.style.zIndex = 0
	});
}
 */
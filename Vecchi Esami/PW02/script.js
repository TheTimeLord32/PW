"use strict";

window.onload = () => {
	fetchData();
	
	let  overlay = document.querySelector(".overlay");
	let btn = document.querySelector(".btnChiudi")
	const actionOverlay = function(e) {
		console.log(e);
		overlay.classList.toggle("hiddenOverlay");
	}
	btn.addEventListener('click', actionOverlay);
	
	/*if (window.innerWidth <= 600) {*/
		let menu = document.querySelector(".menu-ctrl")
		let ul = document.querySelector(".dyn-menu")
		const actionMenu = function(e){
			console.log(e);
			ul.classList.toggle('hidden');
		}
		menu.addEventListener('click',  actionMenu);
	//}
};

function fetchData(){
	fetch("data.json")
	.then(response => response.json())
	.then(json_obj => {
		let ul = document.querySelector("ul");
		for (let i = 0; i < json_obj.length; i++) {
			let li = ul.appendChild(document.createElement("li"));
			let par = li.appendChild(document.createElement("a"));
			
			par.innerHTML = json_obj[i].desc;
			par.setAttribute("href", json_obj[i].link);
		}
	});
}

"use strict";

window.onload = () => {
	fetchData();

};

function fetchData(){
	fetch("data.json")
	.then(response => response.json())
	.then(json_obj => {
		let canvas = document.querySelector(".main").appendChild(document.createElement("canvas"));
		for(let i = 0; i < json_obj.length; i++){
			let ctx = canvas.getContext("2d");
			ctx.fillStyle = json_obj[i].colore;
			ctx.fillRect(0, 0, json_obj[i].pos_orizzontale, json_obj[i].pos_verticale);
		}
	});
}

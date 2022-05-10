/*
@param {Array} giorno
function convertToUS(giorno) {
    let dom = giorno.pop();
    giorno.unshift(dom);
    // giorno.unshift(giorno.pop());
}
*/

// "use strict";
let giorno = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica"
];
console.log("Primo giorno: " + giorno[0]);

function inverti() {
    let invert = giorno.reverse();
    console.log("Primo giorno: " + invert[0]);
}

inverti();
// nuovo
for (let i of giorno) {
    console.log(i);
}

// classico
for (let i = 0; i < giorno.length; i++) {
    console.log(giorno[i]);
}

// loop, evocata 7 volte (grandezza array)
giorno.forEach(function(elemento, indice) {
    console.log(String(indice) + " " + elemento);
});

// join, unisce gli elementi dell'array in una stringa
giorno.join(", ");

// search, ritorna l'indice dell'elemento (-1 se non trovato)
giorno.indexOf("Lunedì");

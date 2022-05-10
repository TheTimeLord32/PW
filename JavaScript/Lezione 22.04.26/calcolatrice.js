"use strict";

let calculator = {
    a : 0,                                                          // inizializzo a 0
    b : 0,                                                          // inizializzo b 0
    insert: function() {
        this.a = Number(prompt("Inserisci il primo numero"));       // prendo il primo numero
        this.b = Number(prompt("Inserisci il secondo numero"));     // prendo il secondo numero
    },
    sum: function() {return this.a + this.b},                       // somma
    sub: function() {return this.a - this.b},                       // sottrazione
    mul: function() {return this.a * this.b},                       // moltiplicazione
    div: function() {return this.a / this.b},                       // divisione
};

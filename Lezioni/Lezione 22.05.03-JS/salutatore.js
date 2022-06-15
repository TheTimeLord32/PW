"use strict";

function salutatore(name) {
    let x = 10;
    return function() {
        console.log(`Ciao ${name}`);
    }
}

let s = salutatore("Mario");
s();

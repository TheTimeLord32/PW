"use strict";
let counter = 0;
let timerID = setInterval( function() {
    console.log("ciao");
    counter += 1;
    if (counter > 4) {
        clearInterval(timerID);
    }
}, 5000);

// il contatore ferma dopo 4 volte la funzione


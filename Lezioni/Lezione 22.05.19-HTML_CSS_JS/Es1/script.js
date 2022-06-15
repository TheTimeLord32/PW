"use strict";

window.onload = () => {
    function main() {
        console.log("A");
        setTimeout(function() {
            console.log("B");
        }, 0);
        console.log("C");
    }
    main();
    // stamperà sempre A, C, B perché la funzione setTimeout è asincrona
};
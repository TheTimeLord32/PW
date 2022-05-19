"use strict";
/*
setTimeout( ()=> {
    console.log("Dopo 1 sec")
    setTimeout( ()=> {
        console.log("Dopo 2 sec")
        setTimeout( ()=> {
            console.log("Dopo 3 sec")
        },  3000)
    }, 2000)
}, 1000);
*/
// callback hell

const wait = function(sec) {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve, sec * 1000);
    });
};

wait(1)
    .then(() => {
        console.log("Dopo 1 sec");
        return wait(1);
    })
    .then(() => {
        console.log("Dopo 2 sec");
        return wait(1);
    })

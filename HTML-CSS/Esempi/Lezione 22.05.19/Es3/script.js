"use strict";

//window.onload = () => {
    console.log("Start");
    setTimeout( () => {
        console.log("Timer 0");
    }, 0);
    Promise.resolve("Resolved promise").then((res) => console.log(res));
    console.log("Stop");
//};

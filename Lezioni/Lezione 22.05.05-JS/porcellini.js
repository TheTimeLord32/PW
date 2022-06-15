"use strict";

function Pig(name, age){
    this.name = name;
    this.age = age;
}

let jimmy = new Pig("Jimmy", 2);
let timmy = new Pig("Timmy", 2);
let tommy = new Pig("Tommy", 2);

Pig.prototype.sayMyName = function(){
    console.log(`Ciao sono ${this.name}`);
}

tommy.sayMyName = function() {
    console.log(`My name is ${this.name}`);
}

jimmy.sayMyName();
timmy.sayMyName();
tommy.sayMyName();

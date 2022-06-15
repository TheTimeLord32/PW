"use strict";

// function calcolatrice() 
// {
    //     sum = parseInt(n1) + parseInt(n2);
    //     alert("Sum of " + n1 + " and " + n2 + " is " + sum);
    // }
    
    // calcolatrice();
    
let n1, n2;
n1 = prompt("Enter first number");
n2 = prompt("Enter second number");

function somma(a, b)
{
    let somma = parseInt(a) + parseInt(b) ;
    return somma;
}
let s = somma(n1, n2);
alert("Somma: " + s);


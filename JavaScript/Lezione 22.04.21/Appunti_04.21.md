# Javascript
## Variabili
```js
const prefix = '06';    //read only
a = 5                   // non uso let/var, dichiarazione implicita
NaN = true;             // non produce errore ma non ha senso
```
```js
"use strict";           // rende i codice superiore un errore
```
- Da mettere prima del resto del codice
- Introdotto in ES5 per retrocompatibilità
- Usato per scrivere codice _moderno_

## Interazioni base: funzioni
- Alert: popup di avviso
- Prompt: popup di input
- Confirm: popup di conferma
- JSDoc: documentazione del codice (implementata Visual Code)
Sono funzioni utili all'interno del browser, metodi oggetto window

### Operatori
- `==`: confronto
- `===`: confronto con tipo
- `??`: se il primo valore è undefined o null, usa il secondo 
- IF ternario:  `var status = (age >= 18) ? 'adult' : 'minor'`
```js
var a = "5";
var b = 5;
alert (a == b); // true
alert (a === b); // false
```
### Variabili _truthy_ e _falsy_
- `false`: false, 0, "", null, undefined, NaN
- `true`: tutto ciò che non è falsy
- `NaN`: non un numero
- `null`: valore nullo
- `undefined`: valore undefined

`a ?? b ? a : b;` se a è undefined o null usa b, dal'if ternario, esce b

# Funzioni
- `function`: definizione di una funzione
- Una funzione deve avere una sola azione, con un nome descrittivo
- Se la funzione esegue più azioni > definire funzioni separate
- Viste come dati, le funzioni sono oggetti
- Possibile passare funzioni a funzioni (come parametri)

## Scope
Visibilità della variabile:
- locale dentro la funzione
- globale a livello per ogni file js

Parametri mancanti = undefined

## Functional expression
```js
let somma = function (a, b) {
    let somma = a + b;
    return somma;
}
let s = somma(3,2);
```
- Espressione funzionale creata quando raggiunta nel punto d'esecuzione
- Dichiarazione funzionale sempre raggiungibile

## Arrow function
`let somma = (a, b) => a + b;`
Sistema sintetico per funzioni


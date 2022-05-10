# Javascript

Linguaggio di programmazione nel '95, Brendan Eich
<br>
Diverso dal Java, chiamato solo per marketing, standardizzato dal 96 (ECMAscript, nuove versioni)
Actual: ECMA2020
<br>
Javascript è il linguaggio più usato da 8 anni

## Ruolo
Client side (browser) e Server Side (NodeJS)
<br>
- Struttura HTML
- Presentazione CSS
- Comportamento Javascript

## Cosa fa
- Autocompletamento ricerche
- Live chat
- AJAX (Asynchronous JavaScript and XML)
- Cambiare elementi e stili di pagina (aggiunge una classe CSS, DOM manipolazione)
- Comunicazione asincrona (inviare dati senza ricaricare la pagina, AJAX)
- Cookie e contenuti locali
- Reazione alle azioni

## Cosa NON fa (nei browser)
- Accedere ai file locali del computer
- Interagire con server remoto

### NodeJS
Nel 2008, Chronium Project, motore JS OpenSource V8. Nel 2009, nasce il backend NodeJS

## Transpilers
Traducono linguaggi differenti in una specifica versione (<i>source-to-source</i>)
<br>
Sorgente: CoffeeScript, TypeScript, Dart, Kotlin (ES6) -> Trasnpiler: BabelJS (ES5)
<br>
Polyfill: librerie JS che adattano il codice (retrocompatibilità)

# Caratteristiche
- Dinamico: non è compilato, gira su VM
- Loosely Typed: non bisogna dire che tipo ha una variabile
- Case sensitive: 'a' e 'A' sono due variabili diverse

JS Garbage Collection: rimuove le variabili che automaticamente non sono più utilizzate

# Variabili
- `let nome = valore;` (possibile omissione del valore, non inizialiazzata)
- `myVar = myNumber` (variabili di tipologia diverse, assegnazione invariata)

<br>
Ogni dato ha un tipo: non serve specificarlo nella dichiarazione ma esistono quelli primitivi e complessi

```js
let test = 5; //Operazioni: + - * / % **
let test = "ciao"; //Stringa, singoli o doppi apici; Operazione: concatenazione con +
let test = 'ciao'; 
let test = true; //Booleana, true o false; Operazione: ! (inverso)
let test;
let test = null;
```
## Metodi delle variabili
```js
let v = "ciao"; -> v.toUpperCase();
let v = 3.14 -> v.toFixed();
```

### Possibili errori
```js
"42" - 3 = 39       //Conversione automatica
"42" + 3 = '423'    //Concatenazione stringa
42 + "3" = '423'    //Concatenazione stringa
```

# Javascript
## Oggetti
```js
var studente = {};              // Crea un oggetto vuoto
studente = new Object();        // Crea un oggetto vuoto
studente.nome = "Mario";        // Aggiungi una proprietà
studente.nome = "Luigi";        // Modifica una proprietà
console.log(studente.nome);     // Stampa il valore di una proprietà
console.log(studente["nome"]);  // Stampa il valore di una proprietà
delete studente.nome;           // Elimina una proprietà
console.log(studente.nome);     // Undefined
```
### Copiare oggetto
```js
let a = {"nome" : "pippo"};
leb b = a;
```
A e B sono riferimenti allo stesso oggetto:
- Copiando A in B, copiamo il riferimento
- Se facciamo `a.nome = "pluto"`, otteremo `b.nome = "pluto"`
- `a == b;` true

## Garbage collection
Le variabili create occupano memoria in maniera dinamica. Quando non ci sono più riferimenti ad una variabile, questa viene eliminata dal sistema tramite il <i>gargage collector</i>.
Può succedere comunque del <i>memory leak</i> in questo modo:
```js
let a = {"nome" : "pippo"};
let b = {"nome" : "pluto"};
a.dog = b;
b.owner = a;
a = null;
b = null;
```
In questo modo, a e b non riescono a puntare allo stesso oggetto, i due oggetti si puntano tra loro e il garbage collector non può agire.

## Metodi
Un oggetto può avere tra le sue proprietà anche delle funzioni, chiamate <i>metodi</i>.
```js
let a = {"nome" : "pippo"};
a.saluta = function() {
    alert("Ciao sono" + this.nome);     //This valutato a call time, durante l'esecuzione
};
a.saluta();
```

```js
// esempio di this (binding)
let a = {"nome" : "pippo"};
let b = {"nome" : "pluto"};

function sayMyName() {
    alert("Ciao sono" + this.nome);
};
a.saluta = sayMyName;       // Ciao sono pippo
b.saluta = sayMyName;       // Ciao sono pluto
```

```js
// Il this nelle arrow function si riferisce al outer scope
let a = {"nome" : "pippo"};

a.saluta = function() {
    let x = () => alert("Ciao sono" + this.nome);
    x();    // Ciao sono pippo
};
```

## Costruttori
Creare oggetti uguali per usare funzioni. <br> Quando viene creato un costruttore con new:
- Viene creato un oggetto vuoto e assegnato this
- Viene eseguito il codice della funzione
- Restituisce this

```js
// costruttore
function User(nome) {
    this.nome = nome;
    this.isAdmin = false;
}

let user = new User("Mario");
alter(user.nome);           // Mario
alter(user.isAdmin);        // false
```

## Tipi variabili base
- 7 primitivi di dato: string, number, bigint, boolean, undefined, null, symbol
- Sono primitivi perché contengono un solo valore
- Hanno comunque dei metodi, come oggi (creati da object wrapper, creato e distrutto quando chiamiamo i metodi)
`let v = "ciao"; console.log(v.toUpperCase());`

## Array
- Sono contenitori di variabili con tipi diversi
- Sono oggetti con proprietà numeriche e metodi per maneggiare l'array
- Ogni elemento ha un indice che parte da 0
`var array = [1, false, "ciao", undefined];`

### Manipolazione array
- Creare array: `var array = [el0, el1, el2, ..., elN];`
- Modificare valore: `array[indice] = valore;`
- Aggiungere elemento: `array.push(el0); // fine | array.unshift(el0); // inizio | array[indice] = el0; // in posizione indice`
- Rimuoerre elemento: `array.pop(); // fine | array.shift(); // inizio | delete array[indice]; // rimuove 1 elemento dall'indice ma non sposta gli indici`
- Lunghezza: `array.length`
- Svuotare array: `array.length = 0; | array = [];`
- Slice: `array.slice(inizio, fine); // ritorna l'array da inizio a fine, NON MODIFICA`
- Splice: `array.splice(inizio, numero_elementi_da_rimuovere); // rimuove elementi da index, MODIFICA`

## Indici array
```js
let a = ["a", "b", "c"];        // array di stringhe
a.length;                       // 3
delete a[0];                    // true
a.length;                       // 2
a[10] = "d";                    // undefined
a.length;                       // 11
```

## Cicli for
- For In itera per le proprietà di un oggetto
- For Of itera per gli elementi di un array (iterabili)
```js
let array = [1, 2, 3];
arr.foo = "bar";

for (let i in array) {
    console.log(i);         // 1, 2, 3, foo
}

for (let i of array) {
    console.log(i);         // 1, 2, 3
}
```
## Loop, join, search
```js
// loop
let color = ["red", "green", "blue"];
color.forEach(function(color) {
    console.log(color);
});

// join
color.join(" "); // red green blue

//search
color.indexOf("green"); // 1
```

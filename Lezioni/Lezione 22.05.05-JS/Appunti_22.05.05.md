# Javascript
## Ereditarietà
Quando chiamiamo una proprietà di un oggetto:
- si cerca tra le proprietà dell'oggetto
- se non trova la proprietà, si cerca tra le proprietà dei prototipi
- se non trova la proprietà, si cerca tra le proprietà dei prototipi di prototipi
- possibilità di ridefinire le proprietà del prototipo (override)

## Prototipi di funzioni
Ogni funzione ha la proprietà "prototype" che è un oggetto. Tutti gli oggetti creati con il costruttore, hanno un prototipo.

```js
function pig(name, age){
    this.name = name;
    this.age = age;
}
pig.prototype.color = "pink";

let tommy = new pig("Tommy", 2);
```
1. Viene creato un nuovo oggetto
1. Viene passato al costruttore la funzione (per il this)
1. Il costruttore setta le proprietà dell'oggetto
1. Il costruttore imposta prototipo oggetto = prototipo funzione

- `pig.protoype.color = "red"` prototipo con colore rosso
- `pig.protoype = {color = "red"}` prototipo con colore vecchio, cambiato riferimento

## Bind
Un metodo per definire chi è il this per una funzione

```js
let a = {id: 10};
let x = function(){ return this.id; };
let y = x.bind(a);
y(); // 10
```

## Apply e Call
- `apply` è un metodo per passare un array come argomenti
- `call` è un metodo per passare argomenti come parametri

```js
function car(maker, model, year){
    this.maker = maker;
    this.model = model;
    this.year = year;
}
let mycar = new car("Ford", "Focus", "2015");

let newcar = new Object();
car.apply(newcar, ["Ford", "Focus", "2015"]);
```

# DOM Manipulation
Document Object Model, interfaccia di programmazione per HTML e XML. Fornisce una mappa strutturata del documento HTML.

- Ogni elemento della pagina è un nodo
- root = "document"
- "document" ha proprietà standard

`let foo = document.getElementById("miodiv").innerHTML;` 

N.B: script eseguito in real time, pagina pronta o non pronto. <br>

- `document.getElementById("miodiv");` Ritorna node associato al div con id
- `document.getElementsByTagName("div");` Ritorna nodelist di nodi associati a elemento div
- `document.getElementsByClassName("mio-classe");` Ritorna nodelist di nodi associati a elemento con classe mio-classe
- `document.querySelectorAll("p.warning");`Permette di usare selettori CSS e ritorna la nodelist
- <b> Nodelist simile ad array </b>

## Associare evento ad elemento
1. Con attributo HTML `<body onclick = 'function()'>`
1. Con metodo `window.onclick = function(); | document.getElementById("miodiv").onclick = function(){};`
1. Con addEventListener `window.addEventListener("click", function);` <br>

## Manipolare un nodo
Settare gli attributi dell elemento HTML con
- `let oldSrc = myImage.getAttribute('src');` Leggere attributi
- `myImage.setAttribute('src', 'newSrc');` Scrivere attributi
- `myP.innerHTML = "<p>Hello World</p>";` Scrivere testo
- `myP.style.color = "red";` Scrivere stile
- `myP.style.backgroundColor = "blue";` Scrivere stile


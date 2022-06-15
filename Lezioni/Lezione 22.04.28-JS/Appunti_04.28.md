# Javascript
## Map (array method)
Metodo per convertire un array in altro:
- Item: i-simo oggetto dell'array
- Index: indice dell'oggetto (parte da 0)
- Array: array originale

```js
// dato un array di stringhe, genera un array contentente la lunghezza della stringa
let a = ["pippo", "pluto", "paperino"];
a.map((item, index, array) => item.length);     // [5, 5, 8]
```

## Reduce (array method)
Metodo per unire gli elementi di un array:
- Item: i-simo oggetto dell'array
- Index: indice dell'oggetto (parte da 0)
- Array: array originale

```js
// dato un array di stringhe, genera una stringa contenente tutti gli elementi
[1, 2, 3].reduce((acc, item) => acc + item); // 6

a.reduce( 
    function (accumulator, item, index, array) {
        /* TODO */
    },
    [initial]
);
// accumualtor = risultato funzione precedente, altrimenti initial se prima volta
```

## Stringhe
```js
let s = "ciao a tutti";
s = "ciao a \
tutti";
s.indexOf("a");                         // posizione 4
s.slice(1);                             // "iao a tutti"
s.trim();                               // "ciao a tutti", leva whitespaces iniziali e finali
s.charAt(1);                            // "i", carattere indice 1
s.toUpperCase();                        // "CIAO A TUTTI"
s.toLowerCase();                        // "ciao a tutti"
```

### Replace stringhe
```js
"ciao ciao".replace("ciao", "bye");     // cambio prima occorenza di ciao
"ciao ciao".replace(/ciao/g, "bye");    // cambio tutte le occorenze di ciao, regex
```

### Formattazione stringhe
```js
let lessonNumber = 3;
console.log(`Questa lezione è la ${lessonNumber}`);
```

### Array e stringhe
Sono oggetti con metodi equivalenti <br>
`let a = [] | let a = New Array() | let a = Array()` <br>
`let s = new String("ciao a tutti") | let s = "ciao a tutti"` <br>

## Date
```js
today = new Date();        // data di oggi
var Xmas95 = new Date ("December 25, 1995 13:30:00");
Xmas95 = new Date(1995, 11, 25)
var Xmas95 = new Date (1995, 11, 25, 9, 30, 0);

Xmas95.getMonth()          // 11
Xmas95.getFullYear()       // 1995
getTime()                  // timestamp di millisecondi dal 1970-1-1
```

## Typeof Instanceof
- `typeof true;` = "boolean" <br>
- `typeof 62;` = "number" <br>
- `let theDay = new Date(1995, 12, 17); | theDay instanceof Date;` = true <br>

### Math
Contiene metodi e costanti per operazioni matematiche
- Trigonometriche
- Esponenziali
- Max, min di una lista
- random
- PI
- Arrotondamenti e troncamenti

## JSON
Utile per convertire oggetti in stringa, importazione dati a un server <br>
`JSON.stringify(obj)` = stringa JSON <br>
`JSON.parse(str)` = oggetto JSON <br>


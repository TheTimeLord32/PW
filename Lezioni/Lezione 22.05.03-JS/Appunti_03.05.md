# Javascript
## Window
Oggetto che rappresenta la finestra del broswer
- alert(), confirm(), prompt(); visualizza un messaggio
- open(), close(), print(); apre una finestra, chiude una finestra, stampa una finestra
- setInterval(), clearInterval(); esegue una funzione dopo un tempo e la cancella (ciclo)
- setTimeout(), clearTimeout(); esegue un timer e lo annulla (one time)

## Var e Let
- Lo scope di var è il functional block più vicino (variabile globale, acquisita da window)
- Lo scope di let è l'enclosing block più vicino (variabile locale)

## Funzioni
Possibilità di definire funzioni interne a funzioni (matrioska, inner e outer function). <br> La funzione interna vede le variabili della funzione outer, non il contrario

### Closure
Metodo per scrivere outer function (ambiente = scope) e inner function (chiusura scope a fine codice) <br> Permettono di simulare la OOP

## Funzione anonima (name pollution)
```js
// Independently Invoked Function Expression
(function() {
    let a = 1;
    let b = 2;
}) ();
```

## Costruttore e prototipo

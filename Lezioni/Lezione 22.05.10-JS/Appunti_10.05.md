# Javascript DOM
## Nodi
- `var newDiv = document.createElement('div');` crea un nodo div
- `var ourText = document.createTextNode('Hello World');` crea un nodo contenente testo
- `var oldDiv = document.getElementById('myDiv');` ottiene un nodo con un id
- `newDiv.appendChild(ourText);` aggiunge un nodo al nodo con id oldDiv
- `oldDiv.appendChild(newDiv);` aggiunge un nodo al nodo con id oldDiv
- `ourDiv.insertBefore(newDiv, para);` aggiunge un nodo al nodo con id oldDiv prima del nodo con id para
- `ourDiv.replaceChild(newDiv, para);` sostituisce il nodo con id para con il nodo con id newDiv
- `parentDiv.removeChild(para);` rimuove il nodo con id para dal nodo con id parentDiv

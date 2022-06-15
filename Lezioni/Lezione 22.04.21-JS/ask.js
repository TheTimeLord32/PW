"use strict";
/**
 * Descrizione del problema
 * @param {string} question: stringa alert che chiede all'utente di inserire un numero
 * @param {function} yes: risposta positiva
 * @param {function} no: risposta negativa
 */
function ask(question, yes, no)
{
    if (confirm(question)){
        yes();
    } else {
        no();
    }
}

ask(
    "Domanda: ",
    () => alert("Si"),
    () => alert("No")
);

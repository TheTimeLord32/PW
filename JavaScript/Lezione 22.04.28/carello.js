"use strict";
let prodotti = [
    { id: 1, prezzo: 5.2, nome: "carote" },
    { id: 2, prezzo: 2.4, nome: "zucchine" },
    { id: 3, prezzo: 1.0, nome: "patate" },
    { id: 4, prezzo: 4.2, nome: "broccoli" },
];

let cart = {
    shopBag: [],
    
    addItem: function(prod) {
        this.shopBag.push(prod);
    },

    removeItem: function(descr) {
        for (let i = 0; i < this.shopBag.length; i++) {
            if (this.shopBag[i].nome === descr) {
                this.shopBag.splice(i, 1);
                return;
            } 
        }
    }
};

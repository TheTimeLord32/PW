"use strict";

function player() {
    let x = 0, y = 0;
    return{
        up: () => y++,
        down: () => y--,
        left: () => x--,
        right: () => x++,
        printCoord: () => console.log(`x: ${x}, y: ${y}`)
    };
}

let p = player();
p.up();
p.right();
p.down();
p.left();
p.printCoord();

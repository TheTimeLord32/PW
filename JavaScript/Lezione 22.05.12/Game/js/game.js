"use strict";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

let monster = {x: 100, y: 120};
let hero = {x: 200, y: 320, speed: 256};

const w = window;
const requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

const bgImage = new Image();
let bgReady = false;
bgImage.onload = () => { bgReady = true; };
bgImage.src = "images/background.png";

const heroImage = new Image();
let heroReady = false;
heroImage.onload = () => { heroReady = true; };
heroImage.src = "images/hero.png";

const monsterImage = new Image();
let monsterReady = false;
monsterImage.onload = () => { monsterReady = true; };
monsterImage.src = "images/monster.png";
let monsterCaught = 0;

function render() {
    if (bgReady && heroReady && monsterReady) {
        ctx.drawImage(bgImage, 0, 0);
        ctx.drawImage(heroImage, hero.x, hero.y);
        ctx.drawImage(monsterImage, monster.x, monster.y);
    };
    
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Prof. catturati: " + monsterCaught, 32, 32);
}

let keysDown = {};
addEventListener("keydown", (e) => keysDown[e.keyCode] = true);
addEventListener("keyup", (e) => delete keysDown[e.keyCode]);

function update(modifier) {
    if (38 in keysDown) { // Player holding up
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
    }
    
    //todo
    if (hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)) {
        ++monsterCaught;
        reset();
    }
}

function reset() {
    hero.x = canvas.width/2;
    hero.y = canvas.height/2;
    monster.x = Math.random() * (canvas.width - 32);
    monster.y = Math.random() * (canvas.height - 32);
}

function main() {
    //todo
    let now = Date.now();
    let delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    requestAnimationFrame(main);
}
let then = Date.now();
reset();
main();

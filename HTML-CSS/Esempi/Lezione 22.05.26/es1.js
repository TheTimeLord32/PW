const fs = require('fs');

fs.readFile('file2.txt', 'utf8', (err, data) => {
    console.log("Async: "+data);
});

const testo = fs.readFileSync('file.txt', 'utf8');
//console.log(testo.toString());
console.log("Sync:" + testo);


const fs = require('fs');
fs.readFile('./lista.json', 'utf-8', (err, data) => {
	// console.log('Async');
	// console.log(data);
});

const http = require('http');

const server = http.createServer((req, res) => {
	const path = req.url;
	if (path === '/') {
		res.writeHead(200, { 
			'Content-Type': 'text/html' 
		});
		res.end('<h1>Hello root</h1>');
	} else if (path === '/data') {
		res.writeHead(200);
		res.end(JSON.stringify(
			[
				{
					"prodotto": "pane", "desc": "500gr"
				},
				{
					"prodotto": "latte", "desc": "1 litro"
				},
				{
					"prodotto": "vino", "desc": "1 bottiglia"
				},
				{
					"prodotto": "biscotti", "desc": "2 pacchi"
				}
			]
		));
	} else {
		res.writeHead(404, { 
			'Content-Type': 'text/html' 
		});
		res.end(JSON.stringify({"status":"error","msg":"API not implemeted"}));
	}
});

server.listen(8081, 'localhost');

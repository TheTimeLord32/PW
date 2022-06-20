const fs = require('fs');
const http = require('http');

const data = fs.readFileSync('./lista.json');

const server = http.createServer((req, res) => {
	const path = req.url;
	const headers = {
		'content-type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
	if (path === '/data') {
		res.writeHead(200, headers);
		res.end(data);
	} else {
		res.writeHead(404, headers);
		res.end({"status":"error","msg":"API not implemeted"});
	}
});

server.listen(8081, 'localhost');

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    const pathname = req.url;
    if(pathname === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Hello</h1>');
    }else if (pathname === '/info'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Info</h1>');
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Error 404</h1>');
    }
});

server.listen(8080, 'localhost');
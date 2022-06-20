const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('data.json');

const port = 8080;
const host = "127.0.0.1"

const server = http.createServer((req, res)=>{
    const path = req.url;
    const headers = {
        "content-type": "application/json",
        "Access-Control-Allow-Origin":"*"
    };
    if (path === '/data'){
        res.writeHead(200,headers);
        res.end(data);
    }else{
        res.writeHead(404, headers);
        res.end({"status":"error","message":"metodo non implementato"});
    }
})

server.listen(port,host,()=>{
    console.log(`server in ascolto sulla porta ${port}`);
})
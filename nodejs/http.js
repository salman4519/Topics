const http = require("http")

const hostname = '127.0.0.1'
const port = 3003

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("welcome to HTTP server salman");
})


server.listen(port,hostname,()=>{
    console.log(`the server is running at http//:${hostname}:${port}/`);
})


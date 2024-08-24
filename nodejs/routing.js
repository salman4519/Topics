const http = require ("http")

const routes = {
    '/' : function index(req,res){
        res.writeHead(200);
        res.end("This is main page")
    },
    '/aboutus' : function aboutus(req,res){
        res.end("this is aboutus page");
    },
    '/salman' : function salman(req,res){
        res.end("hey salman this is your page")
    }
}

http.createServer(function(req,res){
    if(req.url in routes){
        return routes[req.url](req,res)
    }
}).listen(4519)
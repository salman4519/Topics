const http = require("http");
const os = require("os");
const cluster = require("cluster");

if(cluster.isMaster){
    console.log("the master process in running on pid :",process.pid);

    const cpuNUm = os.cpus().length;

    for(let i = 0 ; i < cpuNUm ; i++ ){
        cluster.fork()
    }

    cluster.on('exit',(worker,code,signal)=>{
        console.log(`worker ${worker.process.pid} is died , creating new `)
        cluster.fork();
    })
}else{
    http.createServer((req,res)=>{
        res.setHeader(200)
        res.end("Hello world \n ");
    }).listen(4444)

    console.log(`the worker ${process.pid} hearing the port 4444`)
}
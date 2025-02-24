const  {Worker}=require("worker_threads")

const worker = new Worker('./worker.js');

worker.postMessage({limit:10});

worker.on("message",(result)=>{
    console.log("the result is :",result);
})

worker.on("exit",(code)=>{
    console.log("the code  is  end by:",code);
})


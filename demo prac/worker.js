const  {parentPort}=require("worker_threads")

parentPort.on('message',(data)=>{
    let sum = 0
    for(let i = 0 ; i < data.limit ; i++ ){
        sum += i
    }
    parentPort.postMessage(sum)
})


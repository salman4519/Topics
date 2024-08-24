const http = require("http")
const fs = require("fs")


const server = http.createServer(function(req,res){
    const stream = fs.createReadStream('text.txt')
    stream.pipe(res)
})


server.listen(7860,()=> console.log("the server is running at port : 7860"))
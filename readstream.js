const fs = require("fs")

const readstream = fs.createReadStream('text1.txt','utf8')

readstream.on('data',(chunk)=>{
    console.log("file is readed")
    console.log(chunk)
})

//
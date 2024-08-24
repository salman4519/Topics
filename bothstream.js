const fs = require("fs")

const readstream = fs.createReadStream('text1.txt','utf8') //readstram

const writestream = fs.createWriteStream('text2.txt')

readstream.on('data',(chunk)=>{
    console.log("mission completed")
    writestream.write(chunk)
})
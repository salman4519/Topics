const fs = require("fs")


const writestream = fs.createWriteStream('text2.txt')

writestream.write("hellooo qwsdqwsdguys")

writestream.on('finish',()=>{
    console.log("the file has written")
})
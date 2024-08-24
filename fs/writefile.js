const fs =require("fs")


fs.writeFile('example.txt',('hello world'),()=>{
console.log("file has been written")
})
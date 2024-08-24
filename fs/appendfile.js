const fs = require("fs")


fs.appendFile('example.txt','\n appented text :  salmuuuu set aay da',()=>{
    console.log("file has been appended")
})
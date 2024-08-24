const fs = require("fs")

fs.rename('example.txt','renamed.txt',()=>{
    console.log("file has been renamed")
})
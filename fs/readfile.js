const fs = require("fs")


fs.readFile('text.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})
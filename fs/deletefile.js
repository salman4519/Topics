const fs = require("fs")

fs.unlink('renamed.txt',()=>{
    console.log("the file has been deleted")
})
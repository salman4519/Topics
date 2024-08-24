const fs = require("fs")

const readstream = fs.createReadStream('text1.txt','utf8')

const writestream = fs.createWriteStream('text2.txt')

readstream.pipe(writestream)
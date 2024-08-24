const path = require ("path")

 const file = path.basename("text.txt") // basename

 const file1 = path.dirname("salman/text.txt") // directory name

 const file2 = path.parse("salman/text.txt") // detail

 const file3 = path.resolve("salman/text.txt") // will get absolute path

 const file4 = path.isAbsolute("/home/vava/Desktop/Salman/salman/text.txt") // to find absolute or not

console.log(file4)
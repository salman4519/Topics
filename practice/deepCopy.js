let object = {
    name : "salman",
    numbers : [1,2,3]
}

let deepCopy = JSON.parse(JSON.stringify(object));


deepCopy.numbers[2] = 0;

console.log("original : ",object)
console.log("deepCopy : ",deepCopy)
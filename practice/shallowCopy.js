let object = {
    name : "Salman",
    number : [1,2,3]
}


let shallowCopy = {...object}

shallowCopy.number[2] = 99;

console.log( "original : ", object)

console.log("shallowCopy : " , shallowCopy)
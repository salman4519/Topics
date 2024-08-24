let empty = (obj) =>{
    return (obj == null || typeof obj == 'object' && Object.keys(obj).length == 0)
}

let emptyArray = (arr) => {
    return (arr.length == 0)
}



let arr = []
let arr1 = [1,2,3]


let object = {}

let obj1 = {name : "salman"}

let obj2;

let obj3 = null;


//console.log(empty(obj3))
console.log(emptyArray(arr))
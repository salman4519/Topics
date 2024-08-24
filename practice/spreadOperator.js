const array1 = [11,22,33,44];
const array2 = [10,20,30,40];
const result = [...array1,...array2];


console.log(result);


const one = {
    nickName :"vaazha",
    naad : "naaranga",
    per : "perakka"

}
const two = {
    vazha :"vaazha",
    thenga : "naaranga",
    lotta : "perakka"

}

let utharam = {...one,...two}

console.log(utharam);


const kazhap = [10,20,30,40,50];
const [a,b,...rest] = kazhap;

console.log(rest);
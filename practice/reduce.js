let array = [1,2,3,4,5];

let a = array.reduce(xyz);

console.log(a);

function xyz(a,b){
return a * b;
}

let b = [11,22,34,-3,-87,-75,-11,78,51]


let sum = b.reduce((acc,val)=>{

    if (val  %2 == 0){
        acc+=val
     
      }
      return acc;
},0)
 

  console.log(sum)
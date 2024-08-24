function xyz(){
    var a =new Promise((resolve,reject) => resolve("salmuu"))
return a;
}


xyz().then((a)=>console.log(a));  //method 1

async function loo() { //method 2
    let x=await xyz()
    console.log(x);
}
   

loo(); //call

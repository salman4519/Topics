try{
    console.log("heey salman")
    varNotDefined;  // this  is error 
    console.log("hellooo salman") // this will not run due to the previous line error
}catch(err){ // catching error
    console.log("Error Msg :",err) // sending error alert
}

doSomething1()
.then(()=>{
    doSomething2().catch(err => {throw err}) //if any error occur here it will pass to catch and it will break here
})
.then(()=>{   //this will not work if previous line got errror
    doSomething3().catch(err=>{
        throw err
    })
}).catch(err => console.error(err)) // the error will get here and give alert


async function someFunction1(){
    try{
        await someFuntion2()//will find if there is error or not if there it will pass to catch and break
    }catch(err){
        console.error(err)//will catch and alert if any error occurs
    }
}
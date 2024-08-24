const express =require("express")

const app = express()


app.get('/profile/:id',(req,res)=>{
    const userid = req.params.id;
    
    res.send(`user id ${userid}`)
})

app.listen(4444,()=>console.log("http://localhost:4444"))
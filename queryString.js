const express = require("express")

const app = express()

app.get('/students',(req,res)=>{
    res.send(req.query.name)
})

app.listen(1111,()=>console.log("the server is running at the port http://localhost:1111"))
const express = require("express")
const app = express()
const router = express.Router()
const fs = require("fs")



app.use((req,res,next)=>{
    console.log(`${req.method} requested ${req.url}`);
    next();
})
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/data',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err){
            res.status(500).json({err:"there is an error"})
        }else{
            res.json(JSON.parse(data))
        }
    })
})

app.listen(7777,()=>{
    console.log("the server is running on the port 7777");
})
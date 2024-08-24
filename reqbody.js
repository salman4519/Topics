const express = require("express")
const app = express();

app.use(express.JSON())
app.use(express.urlencoded({extended:true}))
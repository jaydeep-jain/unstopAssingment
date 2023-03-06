const express = require("express")
const mongoose = require("mongoose")
const route = require ("./routes/route")
const app = express()

app.use(express.json())

let url = "mongodb+srv://jaydeepjain:05178@cluster0.aawkugv.mongodb.net/upstopProject"
mongoose.connect(url,{useNewUrlParser:true})

.then(()=> console.log("mongoIsConnected"))

.catch(err=>console.log(err))

app.use('/',route) 

app.use('/okBro',function(req,res){
    res.send("haa bhai sab thik hai ")
})
let port = 3000
app.listen(port,function(){
    console.log('express app running on port'+3000)
})
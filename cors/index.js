const express=require('express')
const fs=require('fs')
const cors=require('cors')
const app=express()

// app.use(cors())

app.use(cors({
    "methods" : "get",
    "origin" : "http://127.0.0.1:5500"
}))

app.get('/',(req,res)=>{
    
    fs.readFile(`${__dirname}/data.json`,(err,data)=>{
         res.json( JSON.parse(data))
    })
})

app.listen(5000,()=>{
    console.log("'server is running")
})
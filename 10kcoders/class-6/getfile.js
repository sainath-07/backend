const fs=require('fs')
const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    
    fs.readFile('./index.txt',(err,data)=>{
        res.send(JSON.parse(data))
        res.end()

    })

})

app.listen(3001,()=>{
    console.log('3001 port is running')
})
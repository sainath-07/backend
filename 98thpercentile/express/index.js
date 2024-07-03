const express = require('express')
const fs=require('fs')
const app = express()

app.get('/',(req,res)=>{
     res.status(200)
    //  it automatically set  content type as application/json we don't need to do it explicitly
     res.json("<h1>helloworld</h1>")

     
     res.end()
})

app.listen(5000,()=>{
    console.log('server is running')
})
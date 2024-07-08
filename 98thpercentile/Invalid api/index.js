const express = require('express')
const fs= require('fs')
const app=express()

const filedata= fs.readFileSync(`${__dirname}/file.txt`,'utf-8')


app.get('/',(req,res)=>{
    res.status(200).json({
        message : filedata
    })

})

// handling the unhandled routes 
app.all('*',(req,res,next)=>{
    // res.status(404).send('Page not found')

    const err = new Error(`can't find ${req.originalUrl} on this server!!`)
    err.statuscode = 404;
    err.status= 'Route doesnot exists'
   next(err)

})

// Global error middleware handling
app.use((err,req,res,next)=>{
       err.statuscode = err.statuscode || 500;
       err.status = err.status || "Error";

       res.status(err.statuscode).json({
        status : err.status,
        message : err.message

       })
})




app.listen(5000,()=>{
   console.log('Server is running')
})
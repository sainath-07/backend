// creating the server using the express js framework in node.js


const express = require('express')

const app= express()

app.get('/',(req,res)=>{
    res.send({name : "sainath", age : 22})

})


app.get('/idly',(req,res)=>{
    const customerDetails={
        name : "Butter Idly",
        extraChutney : true,
        is_sambar : true
    }
    res.send(customerDetails)
})


//With this listen method we can mention port number for application to run
// 1. argument must be port number
// 2. argument we can pass the call back function where we can check whether our server is running or not.
app.listen(3000,()=>{
  console.log('server is running fine...')
})
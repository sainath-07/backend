
const express = require('express')
const morgan=require('morgan')
const toursroute=require(`${__dirname}/Routers/tourrouter.js`)
const usersroute=require(`${__dirname}/Routers/userrouters.js`)

const app = express()

// Middle wares 
app.use(express.json())
app.use(morgan('dev'))


app.use( (req,res,n)=>{
    console.log('middle ware callback function')
    n();
})



// This process is called the mouting the routers.

app.use('/api/v1/tours',toursroute)
app.use('/api/v1/users',usersroute)

module.exports=app
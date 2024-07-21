const express=require('express')
const path = require('path')
const app=express()
const {serversidefun}=require('./controller/serverfun')

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))



app.get('/',serversidefun)

app.listen(5000,()=>{
    console.log('server is running')
})
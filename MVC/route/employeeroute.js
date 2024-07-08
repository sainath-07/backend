const express=require('express')
const bodyparser=require('body-parser')

const app= express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

// We need to tell to express that we are using the ejs engine.

app.set('view engine','pug')
app.set('views',"./views")


const INSERT=require('../controller/registercontroller')

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',INSERT)

module.exports=app
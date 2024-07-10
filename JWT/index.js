const express= require('express')
const jwttoken= require('jsonwebtoken')


const app=express()
const secretkey="secretkey"

app.get('/',(req,res)=>{
    res.json({
        message : "root page"
    })

})

app.post('/login',(req,res)=>{
    const user={
        id :1,
        name : "veda",
        email : "sainath@gmail.com"
    }

    jwttoken.sign({user},secretkey,{expiresIn:"300s"},(err,token)=>{
        res.json({
            token
        })

    })

})



const verifytoken=(req,res,next)=>{
    const bearerheader= req.headers['authorization']
  
    if(typeof bearerheader!="undefined"){
     let result=bearerheader.split(" ")

     result=result[1]
     req.token=result
     next()
    }
    else{
        res.json({
            message : "Token is not valid"
        })
    }

}


app.post('/profile',verifytoken,(req,res)=>{
 jwttoken.verify(req.token,secretkey,(err,authdata)=>{
    if(err){
        res.send({
            message : "Invalid token"
        })
    }
    else{
        res.json({
            message : "Profile accessed",
            authdata
        })
    }

 })

})



app.listen(5000,()=>{
    console.log('server is running')
})

// JWT token consist of 3 things  1. headers 2. payload 3. singnature
// for every it will create the unique the token 
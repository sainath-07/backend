const express=require('express')
const app=express()


app.use(express.static(`${__dirname}/public`))

app.get('/',(req,res)=>{
    res.send("root page")
})

app.listen(4000,()=>{
    console.log('server is running')
})
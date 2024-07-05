const express=require('express')
require('./connetionfile')


const tours=require('./tourscollection')
const { isEmpty } = require('lodash')

const app=express()
app.use(express.json())

app.post('/create',async(req,res)=>{

    let data= new tours(req.body)
    let result = await data.save()
    console.log(result)
   res.send(result)

})

app.get('/data',async(res,req)=>{
        let data =await tours.find()
        req.send(data)
        console.log(data)
})


app.delete('/delete/:_id',async(req,res)=>{
      

    let data= await tours.deleteOne(req.params)
    res.send('data deleted successfully')
    console.log(data)
})

app.put('/update/:_id',async(req,res)=>{
       let data = await tours.updateOne( req.params, {$set : req.body})
       res.send('data udpated successfully')
       console.log(data)
})

app.get('/search/:key',async(req,res)=>{
    let data = await tours.find({
        $or : [
            {"name" :  req.params.key},
            {"city" :  req.params.key},
           
         ]
    })

   

    if(isEmpty(data)){
    console.log("invalid data")
    res.send('invalid data')
    }
    else{
        res.send(data)
         console.log(data)
    }
        
        

  

})


app.listen(5000,()=>{
    console.log('server is running')
})
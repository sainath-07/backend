const express=require('express')
const morgan = require('morgan')
const server=express()



// Third party middlewares

server.use(morgan('default'))  //morgan middleware will provide the httpmethod,status code, time.
 
//bulit-in middle wares

server.use(express.json())
server.use(express.static('./public'))
server.use(express.urlencoded()) //it is used when we are working the forms 



// user defined middleware
const auth=(req,res,next)=>{
      if(req.query.password=='123'){
        console.log(req.path)
         next()
      }
      else{
         res.sendStatus(401)
      }
}
// server.use(auth)


// API - ROUTE - ENDPOINT
server.get('/api',auth,(req,res)=>{
    res.send('root page')
    res.end()
})

server.get('/ten/:id',(req,res)=>{
    console.log(req.params)
       res.send('ten route')
       res.end()
})


server.post('/data',(req,res)=>{
    if(req.body){

        res.json({
            data : req.body
        })
        console.log(req.body)
    }
    else{
       res.json({
         data: "data not received"
       }) 
    }
})

server.listen(5000,()=>{
    console.log('server is running')
})
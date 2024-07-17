const express=require('express')
const fs=require('fs')

const data= JSON.parse( fs.readFileSync('./data.json','utf-8'))
const app=express()
app.use(express.json())



// Read (general read operations)
app.get('/products',(req,res)=>{
     res.send({
        result: data.products
     })
})

// params based read operations
app.get('/products/:id',(req,res)=>{
    const id= +req.params.id
    const findbyid=data.products.find(ele=>ele.id===id)
    res.json({
        result : findbyid
    })
})


// post data

app.post('/products',(req,res)=>{
    console.log(req.body)

    data.products.push(req.body)

    res.json({
        data: req.body
    })
})

// put data
app.put('/products/:id',(req,res)=>{
      const id= +req.params.id
      const findbyid = data.products.findIndex(ele=>ele.id===id)
      data.products.splice(findbyid,1,{...req.body,id:id}) //it will add the id to req.body
      res.send("updated")
})

// patch
app.patch('/products/:id',(req,res)=>{
         const id= +req.params.id
         const findbyid= data.products.findIndex(ele=>ele.id===id)
         const product= data.products[findbyid]
         data.products.splice(findbyid,1,{...product,...req.body}) //here req.body will search and replace the same property.
         res.send('patch is successfull')
})

// delete
app.delete('/products/:id',(req,res)=>{
        const id= +req.params.id
        const findbyid= data.products.findIndex(ele=>ele.id===id)
        data.products.splice(findbyid,1)
        res.send('deleted')

})

app.listen(5000,()=>{
    console.log('server is running')
})
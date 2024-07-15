

const express = require('express')
const app = express()
const data = require('./model/model')

const { Employee, Manager } = data

app.post('/', async (req, res) => {
    const ownerdata = await Manager.create(req.body);
    try {
        res.json({
            message: "inserted the details",
            ownerdata
        })
    }
    catch (err) {
        res.json({
            message: err.message,
        })
    }
})


app.get('/:id',async(req,res)=>{
    const data = await Manager.find({ _id: req.params.id })
      res.send(data)
      
})

app.listen(4000, () => {
    console.log("server is running")
})  
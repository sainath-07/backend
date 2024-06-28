const express = require('express')
const fs = require('fs')
const url = require('url')
const app = express()

// Middleware
app.use(express.json())

var emptyarr = []


app.get('/', (req, res) => {
    var result = url.parse(req.url)
    emptyarr.push(req.body)
   
    fs.writeFile('./index.txt', JSON.stringify(emptyarr), (err, data) => {
        console.log('file created')
        res.status(400)
        res.send(emptyarr)
        console.log(req.query)
    })
})


app.post('/', (req, res) => {
    console.log(req.body, "posted data")
    res.send("data posted successfully ")
    res.end()
})

app.listen(3000, () => {
    console.log('server is running ')
})
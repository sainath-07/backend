const express = require('express')
const app = express()


// comparing the object
var dummyobj = {
    name: "sainath"
}

// json data
data = [
    {
        title: "product",
        brand: "samsung",

    }
]

app.get('/', (req, res) => {
    if (dummyobj.name == req.query.name) {
        res.status(200)
        res.json(data)
        res.end()

    }
    else {
        res.status(400)
        res.json('page not found')
        res.end()
    }
})

app.listen(3000, () => {
    console.log('server is running')
})
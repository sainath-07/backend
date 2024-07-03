const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev_data/data/tour_simple_data.json`))
// console.log(tours)


// GET method in http
// app.get('/api/v1/tours', (req, res) => {
//     console.log(req.route.path)
//     res.status(200).json({
//         status: 'success',
//         Array_length: tours.length,
//         data: {
//             tours
//         }
//     })

//     res.end()
// })


app.get('/api/v1/tours/:id', (req, res) => {
    
    const check_id= req.params.id*1
    const tour= tours.find(ele=>ele.id === check_id)
    console.log(tour)

    if(tour){

        res.status(200).json({
            status: 'success',
            Array_length: tours.length,
            data: {
                tours
            }
        })
        res.end()
    }
    else{
        res.status(404).json({
            status : 'failed to fetch the data',
            message : 'invalid data'
        })
    }
})


// POST method in http 
app.post('/api/v1/tours', (req, res) => {
    // res.send('completed')
    // console.log(req.body)


    const newId = tours[tours.length - 1].id + 1;
    const newtour = Object.assign({ id: newId }, req.body)

    tours.push(newtour)
    fs.writeFile(`${__dirname}/dev_data/data/tour_simple_data.json`, JSON.stringify(tours), (err, data) => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newtour
            }
        })
        res.end()
    })

// Responding to URL parameters

})

app.listen(5000, () => {
    console.log('server is running fine')
})
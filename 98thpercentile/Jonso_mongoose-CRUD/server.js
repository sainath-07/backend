const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: "./../config.env" })

mongoose.connect(process.env.DATABASE_LOCAL)


const createScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have name ']
    },
    rating: {
        type: Number,
        default: 4.4
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price']
    }
})


// Using the then and catch method.
const createModel = mongoose.model('tours', createScheme)
let data = new createModel({ name: "veda", rating: 5, price: 450 })
data.save().then((x) => console.log(x)).catch((e) => console.log(e))


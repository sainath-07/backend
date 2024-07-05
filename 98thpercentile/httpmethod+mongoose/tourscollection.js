const mongoose=require('mongoose')

const data= new mongoose.Schema({
     name : String,
     age : Number,
     salary : Number,
     city : String
})

module.exports=mongoose.model('tours',data)
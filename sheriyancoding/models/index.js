const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/student')
const student=mongoose.Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

module.exports=mongoose.model('student',student)
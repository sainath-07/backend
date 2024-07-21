const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/jwtdatabase')
.then(()=>{
    console.log('database connected')
}).catch(()=>{
    console.log('error message')
})

const userdata=new mongoose.Schema({
    name : {
         type : String,
         required: true
    },
    password : {
         type : String,
         required: true
    },
    token : {
         type : String,
         required: true
    },
})

const usercollection= mongoose.model('usercollection',userdata)
module.exports=usercollection
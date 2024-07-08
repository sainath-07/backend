const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/udemy')

const app=require('./route/employeeroute')


app.listen(5000,()=>{
    console.log('server is running')
})


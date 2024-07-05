const app=require('./app')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
console.log(app.get('env'))


dotenv.config({path : './config.env'})
// console.log(dotenv)

const db= process.env.DATABASE
mongoose.connect(db).then(x=>console.log(x.connections))


const portNumber=5000
app.listen(portNumber, () => {
    console.log('server is running fine')
})
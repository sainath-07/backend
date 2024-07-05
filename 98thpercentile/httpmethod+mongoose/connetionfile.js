const mongoose= require('mongoose')
const dotenv=require('dotenv')

dotenv.config({ path: './../config.env' });

const url= process.env.DATABASE_LOCAL

module.exports=mongoose.connect(url)
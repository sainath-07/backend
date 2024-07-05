const {MongoClient}=require('mongodb')

const url="mongodb+srv://sainathb308:Y1AfZsaihjrBJ7w2@cluster0.pm63wd1.mongodb.net/"
const mongodbserverconnection = new MongoClient(url)

const mongodb=async()=>{
     let connection = await mongodbserverconnection.connect()
     let data = connection.db('udemy').collection('tours')

     return data
}

module.exports=mongodb


const mongodb=require('./con-mongodb')

const FIND=async()=>{
     let data = await mongodb()

     let fetchdata= await data.find({}).toArray()
      console.log(fetchdata)
}
FIND()
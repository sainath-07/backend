const mongodb=require('./con-mongodb')

const UPDATE=async()=>{
     let data=await mongodb()

     let udpatedata= await data.updateOne(
        {name : "vedaVyas"},
        {$set : { name : "veda"}}
     )

     console.log(udpatedata)
}

UPDATE()
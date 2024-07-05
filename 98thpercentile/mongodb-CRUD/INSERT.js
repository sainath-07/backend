const mongodb=require('./con-mongodb')

const INSERT =async()=>{
      let data=await mongodb()

      let  insertData =await data.insertOne(
        {
            name :"vedaVyas",
            age: 25,
            salary : 54200
        }
      )

      console.log(insertData)
}

INSERT()
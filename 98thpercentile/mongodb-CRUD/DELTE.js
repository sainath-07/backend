const mongodb=require('./con-mongodb')

const DELETE=async()=>{
  let data = await mongodb();
  let deletedata = await data.deleteOne({
      name : "sainath"
  })
  

  console.log(deletedata)
}
DELETE()

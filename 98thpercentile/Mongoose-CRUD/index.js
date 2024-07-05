const mongoose=require('mongoose')



mongoose.connect("mongodb://localhost:27017/udemy")

const checkSchema= new mongoose.Schema({
   name : String,
   price: Number
});


// CRUD operation with schema's
const INSERT=async()=>{

     const modelConnection = mongoose.model('tours',checkSchema)
     let data = new modelConnection({ name :"venuyadav",age:23})
     let result = await data.save()
     console.log(result)

}

const UPDATE=async()=>{
     const modelConnection= mongoose.model('tours',checkSchema)

     let data = await modelConnection.updateOne({name :"VenuG Yadav"} , {$set : {name : "ganesh"}})

     console.log(data)
}

const READ =async()=>{
    let modelConnection =mongoose.model('tours',checkSchema)  
    
    let data= await modelConnection.find({name:"ganesh"})
    console.log(data)
}

const DELETE=async()=>{
    let modelConnection= new mongoose.model('tours',checkSchema)

    let data = await modelConnection.deleteOne({name: "sainath"})

    console.log(data)

}

READ()
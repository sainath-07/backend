const express= require('express')
const app=express()
const Employee=require("../models/employeemodel")


const INSERT=async(req,res)=>{
    try{
      
        let data= new Employee({
            name : req.body.name,
            email : req.body.email,
            mobile : req.body.mobile,
            password : req.body.password,
        })

        let result = await data.save()
        res.send('Registeration is successfull '+result)
    }
    catch(err){
         res.send(err.message)
    }
    

}

module.exports=INSERT
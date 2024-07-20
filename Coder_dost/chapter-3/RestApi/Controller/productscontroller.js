const fs=require('fs')
const data= JSON.parse( fs.readFileSync('./data.json'))


exports.getallproducts=(req,res)=>{
    res.send({
       result: data.products
    })
}
exports.geteachproduct=(req,res)=>{
    const id= +req.params.id
    const findbyid=data.products.find(ele=>ele.id===id)
    res.json({
        result : findbyid
    })
}
exports.posteachproduct= (req,res)=>{
    console.log(req.body)

    data.products.push(req.body)

    res.json({
        data: req.body
    })
}
exports.puteachproduct=(req,res)=>{
    const id= +req.params.id
    const findbyid = data.products.findIndex(ele=>ele.id===id)
    data.products.splice(findbyid,1,{...req.body,id:id}) //it will add the id to req.body
    res.send("updated")
}
exports.patcheachproduct=(req,res)=>{
    const id= +req.params.id
    const findbyid= data.products.findIndex(ele=>ele.id===id)
    const product= data.products[findbyid]
    data.products.splice(findbyid,1,{...product,...req.body}) //here req.body will search and replace the same property.
    res.send('patch is successfull')
}
exports.deleteeachproduct=(req,res)=>{
    const id= +req.params.id
    const findbyid= data.products.findIndex(ele=>ele.id===id)
    data.products.splice(findbyid,1)
    res.send('deleted')

}
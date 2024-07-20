const express = require('express')
const products = require('../Controller/productscontroller')

const productRouter=express.Router()



const { getallproducts, geteachproduct, posteachproduct, puteachproduct, patcheachproduct, deleteeachproduct } = products

productRouter.get('/', getallproducts)
    .get('/:id', geteachproduct)
    .post('/', posteachproduct)
    .put('/:id', puteachproduct)
    .patch('/:id', patcheachproduct)
    .delete('/:id', deleteeachproduct)

module.exports=productRouter
const express = require('express')
const ejs=require('ejs')
const products = require('../Controller/productscontroller')


const productRouter = express.Router()



const { getallproducts,getallproductsSSR, geteachproduct, posteachproduct, puteachproduct, patcheachproduct, deleteeachproduct } = products

productRouter.get('/', getallproducts)
    .get('/ssr', getallproductsSSR)
    .get('/:id', geteachproduct)
    .post('/', posteachproduct)
    .put('/:id', puteachproduct)
    .patch('/:id', patcheachproduct)
    .delete('/:id', deleteeachproduct)

module.exports = productRouter
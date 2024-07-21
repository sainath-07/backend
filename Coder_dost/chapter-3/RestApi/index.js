const express = require('express')
const productRouter=require('./Routes/routespage')
const path=require('path')

// console.log(productRouter.productRouter)


// bulit-in Middlewares.
const app = express()
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use(express.json())
app.use('/products', productRouter)

// Shortcut for writing the api, [we need to chain the api by using the dot.]
// app.get('/products', getallproducts)
//     .get('/products/:id', geteachproduct)
//     .post('/products', posteachproduct)
//     .put('/products/:id', puteachproduct)
//     .patch('/products/:id', patcheachproduct)
//     .delete('/products/:id', deleteeachproduct)


app.listen(5000, () => {
    console.log('server is running')
})
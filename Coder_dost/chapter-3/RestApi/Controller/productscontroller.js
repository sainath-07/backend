const Products = require('../models/scheme')


exports.getallproductsSSR = async (req, res) => {
    const productsdata = await Products.find()
    res.render('index.ejs', { productsdata: productsdata })
}

//routes
exports.posteachproduct = async (req, res) => {
    try {
        const products = new Products(req.body)
        const productsdata = await products.save()
        res.status(200).json(productsdata)
    }
    catch (err) {
        res.status(400).json({
            error_message: err
        })
    }
}
exports.getallproducts = async (req, res) => {
    let productsdata = Products.find()

    // Sorting Logic in REST api's
    if (req.query.sort) {
        const sortBy=req.query.sort.split(',').join(' ')
        console.log(sortBy)
        productsdata = productsdata.sort(sortBy)

        // http://localhost:5000/products?sort=price 
        // http://localhost:5000/products?sort=-price  for: Descending order place - before the fieldname
    }
    else{
        // default Sorting Logic
     productsdata = productsdata.find().sort('-discountPercentage')

    }
    const productdata = await productsdata;
    res.json({ productdata })


}

exports.geteachproduct = async (req, res) => {
    const id = req.params.id
    const productsdata = await Products.findById(id)
    res.json({ productsdata })
}
exports.puteachproduct = async (req, res) => {
    const id = req.params.id
    try {
        const productdata = await Products.findOneAndReplace({ _id: id }, req.body, { new: true }) //new:true will return the updated data.
        res.json(productdata)
    }
    catch (err) {
        res.send(400).json({
            error_message: err
        })
    }

}
exports.patcheachproduct = async (req, res) => {
    const id = req.params.id
    try {
        const productdata = await Products.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json({
            data: productdata
        })
    }
    catch (err) {
        res.send(400).json({
            error_message: err
        })
    }
}
exports.deleteeachproduct = async (req, res) => {
    const id = req.params.id
    try {

        const productdata = await Products.findByIdAndDelete({ _id: id })
        res.json({
            productdata
        })
    }
    catch (err) {
        res.json({
            error_message: err,
        })
    }

}
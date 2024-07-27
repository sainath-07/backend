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


    try {
        let productsdata = Products.find()
        // Sorting Logic in REST api's
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            console.log(sortBy)
            productsdata = productsdata.sort(sortBy)

            // http://localhost:5000/products?sort=price 
            // http://localhost:5000/products?sort=-price  for: Descending order place -(hypen) before the fieldname
        }
        else if (req.query.fields) {

            // Limiting fields logic
            let limitfields = req.query.fields.split(',').join(' ')

            //   execlude the _id field 
            limitfields += ' -_id';
            console.log(limitfields)
            productsdata = productsdata.select(limitfields)


            //  http://localhost:5000/products?fields=name,price,brand,title
            //  http://localhost:5000/products?fields=-brand,-price for: exculding the fields run this api
            // we can't perfrom the exclusion,inclusion in one api 

        }
        else {
            // default Sorting Logic
            productsdata = productsdata.find().sort('-discountPercentage')
        }

        // Pagination Logic


        if (req.query.page) {
            let page = req.query.page * 1 || 1;
            let limit = req.query.limit * 1 || 10;
            let skip = (page - 1) * limit
            const productsCount = await Products.countDocuments();

            if (skip > productsCount) {
                throw new Error('This page is not found and no products to show')
            }
            productsdata = productsdata.skip(skip).limit(limit)
        }

        const productdata = await productsdata;
        res.json({
            length: productdata.length,
            productdata
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            error_message: err.message
        })
    }

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
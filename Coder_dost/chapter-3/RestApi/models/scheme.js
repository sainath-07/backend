const mongoose = require('mongoose');
const {Schema}= mongoose

mongoose.connect('mongodb://localhost:27017/Ecommerce')

const productsScheme= new Schema({
    title: {type:String, required:true },
    description: String,
    price: {type: Number , min : [0 , 'wrong price '] , required : true},
    discountPercentage: {type: Number , min : [0 , 'wrong min discount '] , max :[5 ,  'wrong max discount'], required : true},
    rating:{type: Number , min : [0 , 'wrong min rating '] , max :[5 ,  'wrong max rating'], required : true},
    brand: { type: String, required :true},
    category: { type: String, required :true},
    thumbnail: { type: String, required :true},
    images:[String]
});

const Products = mongoose.model('Product',productsScheme)
module.exports=Products
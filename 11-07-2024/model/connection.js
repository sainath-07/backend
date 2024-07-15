const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/98thpercentile")

const checkSchema= new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'A tour must have name '],
    },
    position: {
        type: String,
        required: [true, 'Please enter the position of the employee'],
    },
    department : {
        type : String,
        required:[true, 'Enter the department name of employee']
    },

});

const modelConnection = mongoose.model('employee',checkSchema)

module.exports=modelConnection;
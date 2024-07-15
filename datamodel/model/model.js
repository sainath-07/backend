const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/organisation')

const data= new mongoose.Schema

const Schema = mongoose.Schema;




// Define the Owner schema
// const ownerSchema = new Schema({
//   name: { type: String, required: true },
//   position: { type: String, default: 'Owner' },
//   ceo: { type: Schema.Types.ObjectId, ref: 'CEO' }
// });

// Define the CEO schema
// const ceoSchema = new Schema({
//   name: { type: String, required: true },
//   position: { type: String, default: 'CEO' },
//   managers: [{ type: Schema.Types.ObjectId, ref: 'Manager' }]
// });
// const Owner = mongoose.model('Owner', ownerSchema);
// const CEO = mongoose.model('CEO', ceoSchema);



// module.exports = { Employee, Manager, Owner, CEO };




// Define the Employee schema
const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
});
const Employee = mongoose.model('Employee', employeeSchema);


// Define the Manager schema
const managerSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, default: 'Manager' },
    subordinates: Schema.Types.ObjectId,
    ref: 'CEO'
});
const Manager = mongoose.model('Manager', managerSchema);



module.exports = {Employee,Manager};

// const connectedtomongodb= mongoose.model('company',data)
// module.exports=connectedtomongodb;

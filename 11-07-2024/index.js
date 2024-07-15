const express = require('express')
const app = express()

const data = require('./controllers/employeecontroller')

const {
    addemlopyeedetails,
    verifytoken,
    singledata,
    alldetails,
    update,
    deleteemployee

} = data

// Middleware
app.use(express.json())

// Root page
app.get('/', (req, res) => {
    res.send('root page')

})

// sending the employee data to database
app.post('/api/employees', addemlopyeedetails)

// Reterving the data using the employee id from mongodb
app.get('/api/employees/:id', verifytoken, singledata)

// Reterving all the employee data
app.get('/api/employees', verifytoken, alldetails)

// Updating the employee details with specific ID
app.put('/api/employees/:id', verifytoken, update)

// Deleting the employee details with specific ID:
app.delete('/api/employees/:id', verifytoken, deleteemployee)


app.listen(5000, () => {
    console.log("server is running")
})
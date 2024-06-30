const express = require('express');
const app = express();
const createdcon = require('./sqlconnection'); // Ensure this file exports a valid MySQL connection object


// middle ware
app.use(express.json());


app.delete('/', (req, res) => {
    // Crud operations

    const updateQuery = `DELETE FROM  student WHERE id = ?`;
    const id = req.body.id;
    // const name = req.body.name;

    createdcon.query(updateQuery, [id], (err, data) => {
        // createdcon.query("CREATE DATABASE sainath",(err, data) => {
        // createdcon.query("CREATE TABLE sainath.student(id int primary key,name varchar(20) notnull, city varchar(20))",(err, data) => {
        // createdcon.query("insert into student set ?",req.body,(err, data) => {

        if (err) {
            console.error(err); // Log the error to the console
            res.status(500).send('Failed to create the database');
            return; // Exit the callback function if there's an error
        }
        console.log(data); // Log the result of the query
        res.json({
            "status": 200,
            "message": "successfully inserted the data in sql"
        }); // Send a success response
    });
});


app.get('/users', (req, res) => {

    createdcon.query('select * from sainath.student;', (err, data) => {
        if (err) {
            res.status(400).send(err)

            return
        }

        res.status(200).send(data)
    })

})

app.listen(3000, () => {
    console.log('Server is running fine');
});

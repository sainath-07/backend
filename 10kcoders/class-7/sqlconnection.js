const sql=require('mysql')

let createdcon=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'sainath-9988',
    database:'sainath'
})


createdcon.connect((err,data) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports=createdcon

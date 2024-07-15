const modelConnection=require('../model/connection')
const jsonwebtoken=require('jsonwebtoken')

// token verfication code.
const verifytoken = (req, res, next) => {
    const bearerheader = req.headers['authorization'];

    if (typeof bearerheader !== "undefined") {
        const result = bearerheader.split(" ");
        const token = result[1];
        req.token = token;

        jsonwebtoken.verify(req.token, "secretkey", (err) => {
            if (err) {
                return res.json({
                    message: "Invalid token"
                });
            }
            next();
        });
    } else {
        return res.json({
            message: "Token not found"
        });
    }
};


// adding employee details to database
const addemlopyeedetails=async (req, res) => {

    try {
        let name=req.body.name
        let data = await modelConnection.create(req.body)
        

        jsonwebtoken.sign({ name }, "secretkey", { expiresIn: "24h" }, (err, token) => {
            res.json({
                token,
                data: data
            })

        })
    }
    catch (err) {
        res.send(err.message)
        console.log(err.message)
    }

}

// reterive all details of employee
const alldetails=async (req, res) => {

    const data = await modelConnection.find({})
    res.json({
        message:"All employee details",
        data
    })
    console.log(data)

}

// reterive employee with id

const singledata=async (req, res) => {

    const data = await modelConnection.find({ _id: req.params.id })
    res.send(data)
    console.log("employee details with id")
}

// update
const update=async (req, res) => {
    try {

        const data = await modelConnection.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.send("Update the employee details")
        console.log("Update the employee details")
    }
    catch (err) {
        res.send(err.message)
        console.log(err.message)
    }
}

// delete
const deleteemployee=async (req, res) => {
    try {
        const data = await modelConnection.findByIdAndDelete(req.params.id)
        res.send("employee has been delted form database")
        console.log("employee has been delted form database")
    }
    catch (err) {
        res.send(err.message)
        console.log(err.message)
    }
}

module.exports={
    verifytoken,
    addemlopyeedetails,
    alldetails,
    update,
    deleteemployee,
    singledata
}


const fs=require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev_data/data/tour_simple_data.json`))



//Params Custom Middle ware function
exports.checkParmasId= (req,res,next,val)=>{
    console.log(`tour route id : ${val}`)

    if(req.params.id *1 > tours.length){
        return res.status(404).json({
            status : "fail",
            message : "Page not found"
        })
    };

    next();
}

// Custom middleware for post method 
exports.checkbody=(req,res,next)=>{
    if(!req.body.name || !req.body.price){
       return res.status(400).json({
           status : 'fail',
           message : 'Missing name or price '
       })
    }

    next()
}


// Pathname : tours routes functions.

// GET method in http
exports.getalltours = (req, res) => {
    // console.log(res.time)
    console.log("getalltours function ")

    
    // json method will stop the request response cycle.
    res.status(200).json({
        status: 'success',
        // RequestedTime : res.time,
        Array_length: tours.length,
        data: {
            tours
        }
    })
   

}

// Responding to URL parameters

exports.responsetorul = (req, res) => {
    
    const check_id = req.params.id * 1
    const tour = tours.find(ele => ele.id === check_id)
    // console.log(tour,"tour")

        res.status(200).json({
            status: 'success',
            Array_length: tours.length,
            data: {
                tour
            }
        })
        res.end()
  
    
}

// POST method in http 

exports.postdata = (req, res) => {
    // res.send('completed')
    // console.log(req.body)


    const newId = tours[tours.length - 1].id + 1;
    const newtour = Object.assign({ id: newId }, req.body)

    tours.push(newtour)
    fs.writeFile(`${__dirname}/../dev_data/data/tour_simple_data.json`, JSON.stringify(tours), (err, data) => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newtour
            }
        })
        res.end()
    })


}

// DELETE method in http

exports.delted = (req, res) => {
    const check_id = req.params.id * 1;
    const tour = tours.filter(ele => ele.id !== check_id)


    console.log(tour, "tour")
    fs.writeFile(`${__dirname}/../dev_data/data/tour_simple_data.json`, JSON.stringify(tour), (err, data) => {
        res.status(200).json({
            status: 'success',
            data : "successfully filtered data"
        })
       
    })


}
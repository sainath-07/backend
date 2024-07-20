const fs = require('fs')
const { chunk } = require('lodash')
const server = require('http').createServer()



server.on('request', (req, res) => {

    // 1. Solution

    // fs.readFile('./test.txt',(err,data)=>{
    //     res.write(data)
    //     res.end()
    // })


    // 2. Solution  by using the streams we can improves the performance and minimizes memory usage
    const readable = fs.createReadStream('test.txt')
    readable.pipe(res)

})


server.listen(5000, () => {
    console.log('server is running')
})


// When we have a large data file , tonnes of requests hitting your server will take huge time to process the request and application may take more time to respond or even it crashes.




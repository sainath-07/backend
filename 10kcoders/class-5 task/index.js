const http = require('http')
const fs = require('fs')
const url = require('url')

var emptyarr = []

fs.readFile('./store.js',(err, data) => {
    if (!err && data) {
        try {
            emptyarr = JSON.parse(data)
        }
        catch (err) {
            console.log(err, "error message")
        }
    }

})



http.createServer((req, res) => {

    let file = url.parse(req.url)
    if (file.pathname == '/' && req.method == 'POST') {

        var result = ""

        req.on('data', (chunk) => {
            result += chunk.toString()
        })


        req.on('end', () => {
            const parseddata=JSON.parse(result)
            emptyarr.push(parseddata)
            // console.log(JSON.stringify(emptyarr), "string")
            fs.writeFile('./store.js', JSON.stringify(emptyarr), (err, data) => {

                res.writeHead(200, { 'content-type': 'application/json' })
                res.write('hello')
                res.end()
            })

        })
    }

}).listen(5000, () => {
    console.log('server running ')
})
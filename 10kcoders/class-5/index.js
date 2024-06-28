const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
    const result = url.parse(req.url)

    if (result.pathname == '/' && req.method == 'POST') {
        var body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            console.log(body)

            fs.writeFile('./text.txt', body, (err, data) => {
                if (!err) {

                    res.writeHead(200, { 'content-type': 'application/json' })
                    res.write("hello world")
                    res.end()
                }
            })

        })

    }
}).listen(5000, () => {
    console.log('server is running')
})
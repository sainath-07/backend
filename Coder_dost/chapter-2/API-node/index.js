const http = require('http')
const url = require('url')

http.createServer((req, res) => {


    const result = url.parse(req.url, true)

    if (result.path == '/fruits' && req.method=='GET') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write('fruits')
        res.end()
    }
    else if (result.path == '/vegitables' && req.method=='POST') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write('vegitables')
        res.end()
    }
    else if (result.path == '/sweets' && req.method=='GET') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write('sweets')
        res.end()
    }
    else if (result.path == '/' && req.method=='GET') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write('root page')
        res.end()
    }
    else {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write('Page not found')
        res.end()
    }
    
}).listen(5000, () => {
    console.log('server is running')
})
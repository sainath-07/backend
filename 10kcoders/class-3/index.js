// creating the routes , parsing the url

// we can find the post method in the webbrowser url

const http = require('http')
const { data } = require('./data.js')
const url = require('url')

http.createServer((req, res) => {

    // we will send the request in the form the url to get the data.
    // console.log(req.url) //it will return the endpoints  

    let result = url.parse(req.url, true)//it will return all the details of url like : port,hostname,host,protocol,path

    // console.log(result)

    if (result.pathname == "/details" && req.method == "GET") {
        console.log(req.method)
        console.log(req.url)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write('details page')
    }
    else if (result.pathname == '/products' && req.method == 'POST') {
        console.log(req.method)
        console.log(req.url)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write('products page')
        res.end()
    }
    else if (result.pathname == '/') {
        console.log(req.url)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(data))
        res.end()
    }
    else {
        console.log(req.url)
        res.write('page not found')
        res.end()
    }

}).listen(5000, () => {
    console.log('server is running fine')
})
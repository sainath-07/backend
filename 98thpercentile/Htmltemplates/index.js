const http = require('http')
const fs = require('fs')
const url= require('url')
const slugify = require('slugify')
const matchpattern=require('./module/matchpattern')

const cards = fs.readFileSync(`${__dirname}/templates/cards.html`, 'utf-8')
const overview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const tempproduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')


// Json data

const data = fs.readFileSync(`${__dirname}/dev-code/data.json`)
const resultdata = JSON.parse(data)


// By default sulgify will replace the in-between spaces with hypen 
const slugs=resultdata.map(ele=> slugify(ele.title ,{replacement: '*',lower:true,trim: true}))
console.log(slugs)


http.createServer((req, res) => {
    const {query,pathname}=url.parse(req.url,true)


    if (pathname == '/' || pathname == '/overview') {
        // console.log(pathname)
        res.writeHead(200, { 'Content-type': 'text/html' })
        const showcards = resultdata.map(element => matchpattern(cards, element)).join('')
        const output = overview.replace('{%displaycards%}', showcards)
        res.write(output)
        res.end()
    }
    else if (pathname == '/products') {
        // console.log(pathname)


        res.writeHead(200, { 'Content-type': 'text/html' })
        const getquerydata= resultdata[query.id-1]
        console.log(getquerydata)
        const output= matchpattern(tempproduct,getquerydata)
        res.write(output)
        res.end()
    }
    else {
        res.writeHead(500, { 'content-type': 'application/json' })
        res.write('page not found')
        res.end()
    }
}).listen(4000, () => {
    console.log('server is running')
})
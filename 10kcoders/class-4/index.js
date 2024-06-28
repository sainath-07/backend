// creating the routes , parsing the url

// we can find the post method in the webbrowser url

const http = require('http')
const { data } = require('./data.js')
const fs = require('fs');
const url = require('url')

http.createServer((req, res) => {

    // we will send the request in the form the url to get the data.
    // console.log(req.url) //it will return the endpoints  / path

    let result = url.parse(req.url, true)//it will return all the details of url like : port,hostname,host,protocol,path

    // console.log(result)

    if (result.pathname == "/details" && req.method == "GET") {



    //    task

    //    console.log(result.search)
    let obj={}
       var data = result.search.slice(1).split('&')
       data.forEach((ele,index)=>{
            var one=ele.replaceAll('=',":").split(":")
            var [key,value]=one
            obj[key]=value

       })
       console.log(obj)

       fs.writeFile('./index.txt',JSON.stringify(obj),(err,data)=>{
        console.log("file created")
       })


        // res.writeHead(200, { 'Content-Type': 'application/json' })
        // res.write('details page')
        // res.end()

        // Reading or creating  the file 

        // readfile will accept 2 argument 
        // 1st filepath
        // 2nd is callbackfunction it will accept 2 parameter 1st is error 2nd is data from file
        // fs.readFile('./index.html',(err,data)=>{
        //      res.write(data)
        //      res.end()
        // })


        fs.writeFile('./index.html',"<h1>append the data </h1>",(err,data)=>{
            res.write("file created")
            res.end()
        })

        // fs.writeFile('./one.txt', "sainath", (err, data) => {
        //     res.write("one page created")
        //     res.end()
        // })


        // delete the file 
        // fs.unlink('./new.txt',(err,data)=>{
        //     res.write("deleted file")
        //     res.end()

        // })

        // rename the file
        // fs.rename('./index.txt','new.txt',(err,data)=>{
        //     res.write("file create successfully")
        //     res.end()

        // })



    }
    else if (result.pathname == '/product' && req.method=='GET') {
       

        fs.readFile('./index.txt',(err,data)=>{
            if(!err){
                res.write(data)
                res.end()
            }
        })
    }
    else {
        console.log(req.url)
        res.write('page not found')
        res.end()
    }

}).listen(5000, () => {
    console.log('server is running ')
})
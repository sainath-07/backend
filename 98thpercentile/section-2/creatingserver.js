const http=require('http')
const fs= require('fs')


const data=fs.readFileSync('./dev-code/data.json','utf-8')



http.createServer((req,res)=>{
    let pathname=req.url
    if(pathname=='/overview'){

        res.writeHead(200,{'content-Type':'application/json'})
        res.write('overview page')
        res.end()
    }
    else if(pathname=='/product'){
        res.writeHead(200,{'content-type':'application/json'})
        res.write('product page')
        res.end()
    }
    else if(pathname=='/'){
              res.write(data)
              res.end()


        // fs.readFile('./dev-code/data.json',(err,data)=>{
        //       res.write(data)
        //       res.end()
        // })
    }

    // Api not found
    else{
        res.writeHead(500,{'content-type':'application/json'})
        res.write('Page not found')
        res.end()
    }
}).listen(5000,()=>{
    console.log('server is running')
})

console.log(`${__dirname}`)
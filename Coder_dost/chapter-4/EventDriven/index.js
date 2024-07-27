const http=require('http')
const event=require('events')
const url=require('url')


const server=http.createServer()


// Here event will be emitted by server implicitly we don't need to expilicitly emitt the events.
server.on('request',(req,res)=>{

    let {pathname}= url.parse(req.url, true)//it will return all the details of url like : port,hostname,host,protocol,path
   
      if(pathname=='/api'){
        res.writeHead(200,{'content-type':"application/json"})
        res.write('Api page')
        res.end()
      }
      else{
        res.end('page not found')
      }
}).listen(5000,()=>{
    console.log('server is running')
})


// Custom Events here we have to explicitly emitt the events.
const myemitter=new event.EventEmitter();
myemitter.on('customEvent',(id,name)=>{
  console.log(`userName : ${name} and _id: ${id}`)
})
myemitter.on('customEvent',(id,name)=>{
    console.log(`userName : ${name} and _id: ${id}`)
})
myemitter.emit('customEvent',200,'Sainath')


